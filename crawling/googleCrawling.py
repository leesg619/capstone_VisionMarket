import csv
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver

baseUrl = 'https://www.google.com/search?q='
plusUrl = input("무엇을 검색할까요? : ")
url = baseUrl + quote_plus(plusUrl)

driver = webdriver.Chrome(executable_path="./chromedriver")
driver.get(url)


html = driver.page_source
soup = BeautifulSoup(html)

g = soup.select('.g')

for i in g :
    try :
        print(i.select_one('.LC20lb.DKV0Md').text)
    except :
        pass
    try : 
        print(i.select_one('.iUh30.Zu0yb.qLRx3b.tjvcx').text)
    except :
        pass
    try :
        print(i.a.attrs['href'])
    except :
        pass
    print()
    

driver.close()