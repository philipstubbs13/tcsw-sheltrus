var accountSid = 'ACc62cc5504881517cd9a704409977f0f5';
var authToken = '1f8683b4e3d0c43c5a457f8d1671a5c6';

var client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml',
  to: '+19524543933',
  from: '+19529605416'
}, function(err, call) {
  if(err) {
    console.log(err);
  } else {
    console.log(call.sid);
  }
});