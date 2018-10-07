const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => {
	const twiml = new VoiceResponse();
	twiml.say('Hello from Team Sheltr');

	res.type('text/xml');
	res.send(twiml.toString());

});

app.listen(1337);