const Slackbot = require('slackbots');
const axios = require('axios');

const bot = new Slackbot({
    token: 'xoxb-580618039601-590779891974-k5Cqnqf63r4KpP4EBD9J5eY9',
    name: 'portbot'
});

// Start Handler
bot.on('start', () => {
   const params = {
    icon_emoji: ':taco_bell:'
   };

   bot.postMessageToChannel(
       'portbot',
       'Check portability with @portbot!',
       params
   );
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return; 
    }

    handleMessage(data.text);
});

// Response to Data
function handleMessage(message) {
    if(message.includes(' portability')) {
        portcheck();
    }
    else if(message.includes(' portable')) {
        portcheck();
    }
    else {
        notvalid()
    }
}

// Portability Responses
function portcheck() {
    axios.get('http://api.yomomma.info')
    .then(res => {
      const joke = res.data.joke;
      
      const params = {
        icon_emoji: ':laughing:'
       };
    
       bot.postMessageToChannel(
           'portbot',
           `Yo Momma: ${joke}`, params);
    });
}

// If not valid message
function notvalid() {
    const params = {
        icon_emoji: ':facepalm:'
       };
    
       bot.postMessageToChannel(
           'portbot',
           'I am not sure what you want me to do?', 
           params
         );

};


