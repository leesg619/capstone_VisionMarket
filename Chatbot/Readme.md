# 채팅 ui를 사용한 구글 dialogflow 챗봇 예제

## 실행 방법
1. package-json 설치 후 cmd를 열어서 node app을 실행시키시면 됩니다.
2. localhost:5000/cookie로 먼저 가서 세션 id 생성 후 자동으로 /chat으로 리다이렉트 되어 챗봇 시작
3. 메세지를 POST로 보내어 localhost:5000/send-msg 에서 내용을 fetch로 받아 챗봇 상에 출력

## 주요 기능
1. 기본적으로 챗봇이 대답한 텍스트를 tts로 출력
2. send 버튼 왼쪽에 있는 마이크 버튼을 클릭하여 음성 인식 기능 활성화.
3. dialogflow와 직접적으로 연결되어 intent를 파악하고 node상에서 한번 더 수정할 수 있습니다. (db 연동 등)
4. 이미지 html 태그 삽입을 통해 이미지 업로드 가능.

## 주요 질문
1. 안녕 - 인사
2. 이미지, 사진, 그림 - 랜덤 이미지를 보내줍니다.
3. 날짜 입력 -> 4.10 -> 네 - 웹 api 연동 테스트
4. 자전거 수리 요청 -> 내일 아침9시 ->아니오 or 네 -
이벤트 기능을 통한 인텐트 뒤로 가기 기능 등
---

[챗봇 프론트엔드 참조 링크](https://www.youtube.com/watch?v=EW9I1HqaKwk&ab_channel=EasyTutorials)

[챗봇과 노드의 연동 참조 링크](https://www.youtube.com/watch?v=aAtISTrb9n4&t=3001s&ab_channel=CODERSNEVERQUIT)

