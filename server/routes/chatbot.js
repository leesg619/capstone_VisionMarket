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
  
  var categoryType;
  var smallType;
  console.log('Detected intent');
  const result = responses[0].queryResult;
 
  //도움!
  if(result.intent.displayName === 'shopRecommendation'){
    const result4 = await recommend.find({sessionId:customSession}, function(err, doc){
      if(err) return err;
    })
    Review.find({}, function(err, doc){
      console.log('리뷰: ', doc);
    })
    //console.log(result4);
    if(result4.length === 0){
      var instance = new recommend({
        'sessionId' : customSession,
        'productId' : ''
      });
      await instance.save();
    }
    return '어떤 상품을 추천 해 드릴까요?'
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
    else{
      console.log("잘못된 컨택스트");
      return "잘못된 분류 항목이에요."
    }

    let categoryId;
    let postId;
    const result2 = await Category.find({ctype:categoryType, smallName:smallType}, function(err, doc){
      if(err) console.log(err)
    })
    categoryId = result2[0]._id
    console.log(categoryId);
    
    const result3 = await Post.find({pcategory:categoryId, }, function(err, post){
      if(err) return err;
    })
    let randomize = Math.floor(Math.random() * result3.length);
    postId = result3[randomize]._id
    console.log('상품id : ', postId);

    const result4 = await recommend.find({sessionId:customSession}, function(err, doc){
      if(err) return err;
    })
    console.log(result4);

    if(result4[0].productId !== postId.toString()){
      console.log(result4[0].productId);
      console.log(postId);
      console.log('다르다/1');
      const updatepostId = await recommend.findOneAndUpdate({sessionId:customSession}, {productId: postId.toString()})
      console.log(updatepostId);
    }
    
    if(result3.length === 0){
      return "추천 제품이 없습니다. 다시 추천해주세요."
    } else{
      let imageurl;
      if(result3[randomize].image.length > 0)
      {
        imageurl = result3[randomize].image[0]
        console.log(imageurl);
        return /*'http://localhost:3000/postDetail/'+ result3[randomize]._id + ' ' + */result3[randomize].title + '은 어떠신가요? 맘에 드신다면 예, 다시 추천 받으시려면 아니 라고 해주세요.' + ' | ' + imageurl
        //자체 url 처리 방법 강구
      }
      else{
        return result3[randomize].title + '은 어떠신가요? 맘에 드신다면 예, 다시 추천 받으시려면 아니 라고 해주세요.'
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
      return result3[0].title + "상품에 대해 음성 리뷰를 듣고 싶으시다면 음성리뷰, 결제를 진행하시고 싶으시다면 네, 다시 추천 받고 싶으시다면 아니오 라고 해주세요."
    }
    
    //결제하시겠습니까? 네
    else if(result.intent.displayName=== 'shopPurchase - yes'){
      console.log('결제하러이동')
      result2 = await recommend.find({sessionId:customSession}, function(err, doc){
        if(err) return err
      })
      postId = result2[0].productId;
      result3 = await Post.find({_id:postId}, function(err, doc){
        if(err) return err
      })
      link_ = '/postDetail/' + result3[0]._id;
    }
    else if(result.intent.displayName === 'musicIntent'){
      mp3_ = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    }
    // recommend.find({}, function(err, doc){
    //   console.log(doc)
    // });
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    return result.fulfillmentText;
  }
  
  
  return 'asdf | https://cdn.pixabay.com/photo/2015/09/02/13/24/man-919045_960_720.jpg';

  

  
  
  //먼저 상품 추천받는 상품 id추출 
  var productId_ = '1234';
  //세션 아이디에 대한 추천된 기록이 없으면 만들기, 있다면 업데이트
  // recommend.find({sessionId : customSession}, function(err, doc){
  //   if(err){
  //     var instance = new recommend();
  //     instance.sessionId = customSession;
  //     instance.productId = productId_;
  //     instance.save(function(err){
  //     })
  //   }
  //   else{
  //     recommend.findOneAndUpdate(
  //       {sessionId: customSession},
  //       {productId: productId_},
  //       function(err, result){
  //       }
  //     )
  //   }
  // })
  // var instance = new recommend();
  // instance.sessionId = customSession;
  // instance.productId = productId_;
  // instance.save();

  //세션에 저장된 상품 id 조회
  /*console.log(customSession)
  recommend.find({sessionId : customSession}, function(err, doc){
    console.log(doc[0].productId)
  })*/
  
    //상품 추천 받았을 때
    // recommend.find({sessionId : customSession}, function(err, doc){
    //   if(err) return err;
    //   doc.productId, id의 이미지
    //   return 프로덕트 링크 이 제품은 어떠세요~ | 이미지 링크
    // })

    //상품 페이지로 이동할 때
}

module.exports = router

