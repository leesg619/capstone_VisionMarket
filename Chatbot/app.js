const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();
const port = 5000;

const sessionId = uuid.v4();

var customSession = "";

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('public'));

app.use(cookieParser());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/cookie', (req, res) => {
    customSession = Math.random().toString(36).substr(2,11);
    const sessionKey = {"key" : customSession}
    res.cookie("SessionKey", sessionKey);
    res.redirect('/chat');
})

app.get('/resetCookie', (req, res) => {
    res.clearCookie("SessionKey");
    res.redirect('/cookie');
})

app.get('/chat', (req, res)=>{
    customSession = req.cookies.SessionKey.key;
    console.log(req.cookies);
    res.send(`
    <html>
    <head>
        <title>Chat Box UI Design</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="container">
            <div class="msg-header">
                <div class="msg-header-img">
                    <img src="user2.jpg">
                </div>
                <div class="active">
                    <h4>reflelia</h4>
                    <h6>3 hours ago...</h6>
                </div>
                <div class="header-icons">
                    <i class="fa fa-phone"></i>
                    <i class="fa fa-video-camera"></i>
                    <i class="fa fa-info-circle"></i>
                </div>
            </div>
            <div class="chat-page">
                <div class="msg-inbox">
                    <div class="chats">
                        <div class="msg-page">
                        <!-- 여기서부터 채팅 내용 -->
                        </div>
                    </div>
                </div>
                <div class="msg-bottom">
                    <form class="input-group" id="mymsg" method="POST">
                        <input type="text" id="MSG" name="MSG" class="message-input" placeholder="write message...">
                        <i class="fa fa-microphone" id="start-record-btn"></i>
                        <button type="submit" id="btn-submit" class="message-submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
        <script src="index.js"></script>  
    </body>
</html>
    
    `)
})

app.post('/send-msg', (req, res)=> {
    
    SessionKey = req.headers.cookie;
    console.log(SessionKey);
    if(SessionKey === undefined){
      SessionKey = 'test';
      console.log(SessionKey);
    } else {
      SessionKey = SessionKey.substring(33, 44)
    }
    runSample(req.body.MSG, SessionKey).then(data=>{
        res.send({Reply:data})
    })
})

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, customSession, projectId = 'shopbot-yaic') {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename:"C:/Users/reflelia/Desktop/bot-ui-master/shopbot-yaic-c4515a17a3f2.json"
  });
  
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, customSession);
  const intents = process.argv[2];
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: 'ko-KR',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
  return result.fulfillmentText;
}

app.listen(port,()=>{
    console.log("running on port " + port);
})

/* 
세션 아이디 설정 : 
express의 세션으로 접속할 때마다 임의로 지정해야 한다.
기본 uuid.v4는 구글 dialogflow로 직접 가져온다 - 중복
*/