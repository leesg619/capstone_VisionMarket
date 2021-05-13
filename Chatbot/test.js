const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
 async function runSample(msg, customSession, projectId = 'shopbot-yaic') {
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename:"C:/Users/노희선/Desktop/capstone_project-master/Chatbot/shopbot-yaic-c4515a17a3f2.json"
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

  console.log(runSample('안녕', 'test-session'));