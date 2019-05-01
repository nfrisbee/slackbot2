const Slackbot = require('slackbots');
const axios = require('axios');
const url = `https://api.flowroute.com/v2/portorders/portability`;
const bot = new Slackbot({
    token: 'xoxb-580618039601-590779891974-UBwwfBWR0k6miQzC53HFYzS3',
    name: 'portbot'
});

// Start Handler
bot.on('start', () => {
   const params = {
    icon_emoji: ':smiling:'
   };

   bot.postMessageToChannel(
       'portbot',
       'Check flowroute with @portbot!',
       params
   );
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message' || data.subtype === 'bot_message') {
        return; 
    }

    handleMessage(data.text);
});

// Response to Data
function handleMessage(message) {
    if(message.includes('hello')) {
        portcheck();
    }
    else if(message.includes('portable')) {
        portcheck();
    }
    else{
         notvalid();     
    }
};
// Portability Responses
function portcheck() {
    axios.post(`https://api.flowroute.com/v2/portorders/portability`)
    axios({
        method: 'post',
        url,
        auth: {
          username: '95811327',
          password: 'KVVWeZPf9YkbrPcp15gutZmAM9JD0d0o'
        }
    })
    .then(res => {
      const portable = res.data.portable;
      
      const params = {
        icon_emoji: ':tada:'
       };
    
       bot.postMessageToChannel(
           'portbot',
           `Status: ${portable}`, params);
    })
    .catch(function (error) {
        console.log(error);
    });
};



//If not valid message
function notvalid() {
    const noParam = {
        icon_emoji: ':laughing:'
       };
    
       bot.postMessageToChannel(
           'portbot',
           'What would you like me to do? Give me a 10 digit number to check portability.' ,
           noParam,
         );
         

};

//Axios 
// axios({
//     method: 'post',
//     url: 'https://api.flowroute.com/v2/portorders/portability',
//     auth: {
//       username: ' ',
//       password: ' '
//     }
//   });