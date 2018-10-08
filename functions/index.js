const functions = require('firebase-functions');
const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();
app.get('/timestamp', (request, response) => {
	response.send(`${Date.now()}`);
});

app.get('/timestamp-cached', (request, response) => {
	response.set('Cache-Control', 'public, max-age=300, s-maxage=600' );
	response.send(`${Date.now()}`);
});

app.post('/voice', (req, res) => {
	const twiml = new VoiceResponse();
	twiml.say('You have successfully checked into Homeless Shelter 123 from the Shelter app. Have a nice stay.');

	res.type('text/xml');
	res.send(twiml.toString());

});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
