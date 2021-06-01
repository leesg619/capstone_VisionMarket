import requests
import uuid
import time
import json
# curl --request POST 'https://85db3bce72a7459d8cf672cb9af18928.apigw.ntruss.com/custom/v1/8263/ed7588280ddea2b1a1c8a51aefee5fb96e21e0d40267c0857bb5da8acd6de97f/general' \
# --header 'X-OCR-SECRET: Y2ZFSGRFRkt1Q0tzUkRadHhocUVKVWJrRFR3bkRpRFE=' \
# --form 'essage={"images" : [{"format":"jpeg", "name":"demo"}], "requestId" :"string", "version" : "V1", "timestamp" : 1584062336793}' \
# --form "file=/Users/goyeongbin/Desktop/'21년도1학기/목123_컴퓨터공 학캡스톤디자인'/이미지OCR테스트/9d876acb-ae73-41fb-9f00-5600292a5549.jpeg"


api_url = "https://85db3bce72a7459d8cf672cb9af18928.apigw.ntruss.com/custom/v1/8263/ed7588280ddea2b1a1c8a51aefee5fb96e21e0d40267c0857bb5da8acd6de97f/general"
secret_key = "Y2ZFSGRFRkt1Q0tzUkRadHhocUVKVWJrRFR3bkRpRFE="
image_file = 'uploads/post/images/9d876acb-ae73-41fb-9f00-5600292a5549.jpeg'

request_json = {
    'images': [
        {
            'format': 'jpg',
            'name': 'demo'
        }
    ],
    'requestId': str(uuid.uuid4()),
    'version': 'V2',
    'timestamp': int(round(time.time() * 1000))
}

payload = {'message': json.dumps(request_json).encode('UTF-8')}
files = [
  ('file', open(image_file,'rb'))
]
headers = {
  'X-OCR-SECRET': secret_key
}

for f in files :
    print(f)   

print(files)

# response = requests.request("POST", api_url, headers=headers, data = payload, files = files)

# print(response.request.hooks)
# # print(response.request.body)
# print(response.request.headers)

# print(response.text.encode('utf8'))