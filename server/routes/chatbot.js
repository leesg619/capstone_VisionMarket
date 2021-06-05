const dialogflow = require('@google-cloud/dialogflow');
const express = require('express');
const {recommend} = require('../models/recommend');
const {Category} = require('../models/Category')
const {Post} = require('../models/Post')
const {Review} = require('../models/Review')
const router = express.Router();
var link_ = '';
var mp3_ = '';

router.post('/send-msg', (req, res)=> {
    // console.log(req.body);
    // console.log(req.body);
    // res.send(req.body);
    runSample(req.body.msg, req.body.sessionId).then(data=>{
      if(data !== undefined){
        if(data.indexOf('|') !== -1){
          var strArray = data.split('|');
          res.send({Reply:strArray[0], Img:strArray[1], link: link_, mp3: mp3_});
        } else {
          res.send({Reply:data, Img: '', link: link_, mp3:mp3_});
        }
        link_ = '';
        mp3_ = '';
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
    keyFilename:"./server/config/key/shoprecommend-lofa-a4efaef3c7bb.json" //자신의 키 파일
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
  
  var categoryType;
  var smallType;
  console.log('Detected intent');
  const result = responses[0].queryResult;
 
  //도움!
  if(result.intent.displayName === 'shopRecommendation'){
    const result4 = await recommend.find({sessionId:customSession}, function(err, doc){
      if(err) return err;
    })
    if(result4.length === 0){
      var instance = new recommend({
        'sessionId' : customSession,
        'productId' : ''
      });
      await instance.save();
    }
    return '어떤 상품을 추천 해 드릴까요? 예시) 남성패션 의류'
  }
  //추천해 줘 라고 했을 때 : 
  else if(result.intent.displayName === 'shopRecommendation - recommend'){
    console.log('컨텍스트', result.parameters.fields.bigName.stringValue);
    if(result.parameters.fields.bigName.stringValue === '장애물품'){
      console.log('장애물품', result.parameters.fields.handicappedSmallName.listValue.values[0].stringValue);
      categoryType = 0;
      smallType = result.parameters.fields.handicappedSmallName.listValue.values[0].stringValue;
    }  
    else if(result.parameters.fields.bigName.stringValue === '남성패션'){
      console.log('남여옷류', result.parameters.fields.otherSmallName.stringValue);
      categoryType = 2;
      smallType = result.parameters.fields.otherSmallName.stringValue;
    }
    else if(result.parameters.fields.bigName.stringValue === '여성패션'){
      console.log('남여옷류', result.parameters.fields.otherSmallName.stringValue);
      categoryType = 3;
      smallType = result.parameters.fields.otherSmallName.stringValue;
    }
    else if(result.parameters.fields.bigName.stringValue === '공용패션'){
      console.log('공용옷류', result.parameters.fields.clothesSmallName.stringValue);
      categoryType = 1;
      smallType = result.parameters.fields.otherSmallName.stringValue;
    }
    else {
      console.log("잘못된 컨택스트");
      return "잘못된 분류 항목이에요. 다시 추천 해 주실래요?"
    }
    if(smallType === ''){
      return "잘못된 분류 항목이에요. 다시 추천 해 주실래요?"
    }
    let categoryId;
    let postId;
    const result2 = await Category.find({ctype:categoryType, smallName:smallType}, function(err, doc){
      if(err) console.log(err)
    })
    console.log(result2[0]._id);
    categoryId = result2[0]._id
    
    const result3 = await Post.find({pcategory:categoryId, }, function(err, post){
      if(err) return err;
    })
    //상품 없을 시
    if(result3.length === 0){
      return "현재 선택된 카테고리에 맞는 상품이 없어요. 다시 추천 해 주실래요?"
    }
    let randomize = Math.floor(Math.random() * result3.length);
    postId = result3[randomize]._id

    const result4 = await recommend.find({sessionId:customSession}, function(err, doc){
      if(err) return err;
    })

    if(result4[0].productId !== postId.toString()){
      const updatepostId = await recommend.findOneAndUpdate({sessionId:customSession}, {productId: postId.toString()})
    }
    
    if(result3.length === 0){
      return "추천 제품이 없습니다. 다시 추천해주세요."
    } else{
      let imageurl;
      if(result3[randomize].image.length > 0)
      {
        imageurl = result3[randomize].image[0]
        console.log(imageurl);
        return result3[randomize].title + '은 어떠신가요? 마음에 드신다면 네, 다시 추천 받으시려면 아니 혹은 카테고리를 불러주세요.' + ' |' + imageurl
      }
      else{
        return result3[randomize].title + '은 어떠신가요? 마음에 드신다면 네, 다시 추천 받으시려면 아니 혹은 카테고리를 불러주세요.'
      }
    }
    
  }
  else{

    //소개해줘 라고 했을 때
    if(result.intent.displayName === 'introduceIntent'){
      link_ = '/introduce';
    }

    //추천 받고 네 라고 했을 때
    else if(result.intent.displayName === 'shopRecommendation - recommend - details'){
      result2 = await recommend.find({sessionId:customSession}, function(err, doc){
        if(err) return err
      })
      postId = result2[0].productId;
      result3 = await Post.find({_id:postId}, function(err, doc){
        if(err) return err
      })
      return result3[0].title + " 상품에 대해 음성 리뷰를 듣고 싶으시다면 음성리뷰, 결제를 진행하시고 싶으시다면 네, 다시 추천 받고 싶으시다면 아니오 라고 해주세요."
    }

    else if(result.intent.displayName === 'shopVoiceReview - detail'){
      const result2 = await recommend.find({sessionId:customSession});
      var postResult = result2[0].productId;
      const result3 = await Review.find({post:postResult, voice: true});
      if(result3.length === 0){
        return '음성 리뷰가 없습니다. 아니오라고 대답하여 다음으로 넘어가주세요';
      }
      console.log(result3);
      let ReviewRandomize = Math.floor(Math.random() * result3.length);
      console.log(ReviewRandomize);
      mp3_ = result3[ReviewRandomize].filepath;
      return '음성 리뷰가 재생됩니다. 다른 리뷰를 들으시려면 시작, 괜찮으시다면 아니오 라고 해주세요.'
    }
    
    //결제하시겠습니까? 네
    else if(result.intent.displayName=== 'shopPurchase - yes'){
      result2 = await recommend.find({sessionId:customSession}, function(err, doc){
        if(err) return err
      })
      postId = result2[0].productId;
      result3 = await Post.find({_id:postId}, function(err, doc){
        if(err) return err
      })
      link_ = '/postDetail/' + result3[0]._id;
    }

    //음악 인텐트
    else if(result.intent.displayName === 'musicIntent'){
      mp3_ = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    }

    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    return result.fulfillmentText;
  }
}

module.exports = router

