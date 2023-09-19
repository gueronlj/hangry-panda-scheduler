const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
const WORKSPACE_ID = import.meta.env.VITE_WORKSPACE_ID;
const RECEIVER_PHONE_NUMBER = "+17038511955"
const URL = `https://nest.messagebird.com/workspaces/${WORKSPACE_ID}/channels/${CHANNEL_ID}/messages`;

const sendMessage = async () => {
   fetch( URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `AccessKey ${API_KEY}`
      },
      body: JSON.stringify({       
         receiver: {
            contacts: [
               {
               identifierValue: RECEIVER_PHONE_NUMBER
               }
            ]
         },
         body: { 
            type: "text",
            text: {
               text: "this is a test form the MessageBird API"
            }
         }
      })
   })
   .then(response => response.json())
   .then(data => {
      // do something with the data
      console.log(data);
   })
   .catch(error => {
      // handle the error
      console.log(error);
   });
}

export default sendMessage;