const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => {
	const twiml = new VoiceResponse();
	twiml.say('You have successfully checked into Homeless Shelter 123 from the Shelter app. Have a nice stay.');

	res.type('text/xml');
	res.send(twiml.toString());

});

app.listen(1337);