import csv

from urllib.request import Request, urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
import requests

search = input("검색어 입력 : ")

# https://www.coupang.com/np/search?component=&q={quote_plus(search)}
base_url = 'https://www.coupang.com/np/search?component=&q='

# https://www.coupang.com/vp/products/2305593030?itemId=3973939593&vendorItemId=71958279700&sourceType=srp_product_ads&q=여자니트&itemsCount=36&searchId=ce1f5586ad5d46fe972ee3674a801f77&rank=0&isAddedCart=
# url = Request(base_url + quote_plus(search), headers={'User-Agent': 'Mozilla/5.0'})

req = requests.get(base_url + quote_plus(search), headers={'User-Agent': 'Mozilla/5.0'})

# html = urlopen(base_url + quote_plus(search)).read()
soup = BeautifulSoup(req.content, 'html.parser')

maxpage = int(soup.select_one('.btn-last.disabled').text)

soup = BeautifulSoup(req.content, 'html.parser')
products = soup.select('.search-product-wrap')

csvlist = []

for product in products :
    temp = []
    try :
        img = product.img.attrs['src']
        name = product.select_one('.name').text
        price = product.select_one('.price-value').text
    except :
        pass
    temp.append(img)
    temp.append(name)
    temp.append(price)
    csvlist.append(temp)


for page_number in range(2, maxpage+1) :
    req = requests.get(base_url + quote_plus(search)+quote_plus(f'&page={page_number}'), headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(req.content, 'html.parser')
    products = soup.select('.search-product-wrap')

    for product in products :
        temp = []
        try :
            img = product.img.attrs['src']
            name = product.select_one('.name').text
            price = product.select_one('.price-value').text
        except :
            pass
        temp.append(img)
        temp.append(name)
        temp.append(price)
        csvlist.append(temp)

f = open(f'{search}.csv', 'w', encoding='UTF-8', newline='')
csvWriter = csv.writer(f)

for i in csvlist :
    csvWriter.writerow(i)

f.close()

print('완료')
