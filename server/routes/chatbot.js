const dialogflow = require('@google-cloud/dialogflow');
const express = require('express');
const {recommend} = require('../models/recommend');
const router = express.Router();
var link_ = '';

router.post('/send-msg', (req, res)=> {
    // console.log(req.body);
    // console.log(req.body);
    // res.send(req.body);
    runSample(req.body.msg, req.body.sessionId).then(data=>{
        if(data.indexOf('|') !== -1){
          var strArray = data.split('|');
          res.send({Reply:strArray[0], Img:strArray[1]});
        } else {
          res.send({Reply:data, Img: '', link: link_});
          link_ = '';
        }
        
    })
})

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
 async function runSample(msg, customSession, projectId = 'shoprecommend-lofa') {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename:"./config/key/shoprecommend-lofa-7818f93caa18.json"
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
  if(result.intent.displayName === 'number selector - select.number'){
    console.log(result.parameters.fields.number.listValue.values[0].numberValue);
    // console.log(result.parameters.fields['date-time'].structValue.fields.date_time.stringValue); date-time 출력
  }
  if(result.intent.displayName === 'introduceIntent'){
    link_ = '/introduce';
  }
  /*
  //먼저 상품 추천받는 상품 id추출 
  var productId_ = '1234';
  //세션 아이디에 대한 추천된 기록이 없으면 만들기, 있다면 업데이트
  recommend.find({sessionId : customSession}, function(err, doc){
    if(err){
      var instance = new recommend();
      instance.sessionId = customSession;
      instance.productId = productId_;
      instance.save(function(err){
      })
    }
    else{
      recommend.findOneAndUpdate(
        {sessionId: customSession},
        {productId: productId_},
        function(err, result){

        }
      )
    }
  })
  */
    //상품 추천 받았을 때
    // recommend.find({sessionId : customSession}, function(err, doc){
    //   if(err) return err;
    //   doc.productId, id의 이미지
    //   return 프로덕트 링크 이 제품은 어떠세요~ | 이미지 링크
    // })

    //상품 페이지로 이동할 때
 
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
  return result.fulfillmentText;
}

module.exports = router

/* 
세션 아이디 설정 : 
express의 세션으로 접속할 때마다 임의로 지정해야 한다.
기본 uuid.v4는 구글 dialogflow로 직접 가져온다 - 중복
*/
