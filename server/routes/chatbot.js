const dialogflow = require('@google-cloud/dialogflow');
const express = require('express');
const router = express.Router();

router.post('/send-msg', (req, res)=> {
    // console.log(req.body);
    // console.log(req.body);
    // res.send(req.body);
    runSample(req.body.msg, 'test-sessionid').then(data=>{
        if(data.indexOf('|') !== -1){
          var strArray = data.split('|');
          res.send({Reply:strArray[0], Img:strArray[1]});
        } else {
          res.send({Reply:data, Img: ''});
        }
        
    })
})

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, customSession, projectId = 'shopbot-yaic') {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename:"./config/key/shopbot-yaic-eb79d1044366.json"
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

module.exports = router

/* 
세션 아이디 설정 : 
express의 세션으로 접속할 때마다 임의로 지정해야 한다.
기본 uuid.v4는 구글 dialogflow로 직접 가져온다 - 중복
*/
