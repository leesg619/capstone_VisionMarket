import csv
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup

# api_txt_lines total_tit 이름 검색

search = input("검색어 설정 : ")
url = f'https://m.search.naver.com/search.naver?where=m_view&sm=mtb_jum&query={quote_plus(search)}'


html = urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

total = soup.select('.api_txt_lines.total_tit')
searchlist = []

for i in total :
    temp = []
    temp.append(i.text)
    temp.append(i.attrs['href'])
    searchlist.append(temp)

f = open(f'{search}.csv', 'w', encoding="utf-8", newline='')
csvWriter = csv.writer(f)
for i in searchlist :
    csvWriter.writerow(i)

f.close()
print("Success")