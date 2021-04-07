import csv

from urllib.request import urlopen, Request
from urllib.parse import quote_plus
from bs4 import BeautifulSoup

# 검색창 url https://www.coupang.com/np/search?component=&q={검색}
# 검색 결과에 있는 하나의 상품 정보 search-product 
# 검색 결과에 있는 상품 정보 이미지 search-product-wrap-img
# 상품 설명 란 descriptions
# 상품 이름 name
# 상품 가격 price-value
# 상품 별점 rating
# https://www.coupang.com/np/search?q=여자+티셔츠&page=2
# 검색 요령, 띄어쓰기는 공백이 아닌 +로 대체표기
# 페이지네이션 search-pagination
# 페이지네이션 안에 쓰이는 맥스 페이지btn-last disabled

search = input("상품 검색어 : ")
url = f"https://www.coupang.com/np/search?component=&q={search}&channel=user"
req = Request(f'https://www.coupang.com/np/search?component=&q={search}&channel=user', headers={'User-Agent': 'Mozilla/5.0'})
html = urlopen(req).read()
soup = BeautifulSoup(html, 'html.parser')

maxpage = soup.select_one('.btn-last.disabled')

maxpage = int(maxPage)

searchlist = []

search_product = soup.select_one('.search-pagination')
print(search_product)

# for page_number in range (1, maxpage+1) :
#     url = Request(f"https://www.coupang.com/np/search?component=&q={search}&page={page_number}&channel=user", headers={'User-Agent': 'Mozilla/5.0'})
    
#     html = urlopen(url).read()
#     soup = BeautifulSoup(html, 'html.parser')

#     total = soup.select('.search-product')
    
#     for i in total :
#         print(i)