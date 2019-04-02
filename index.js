var Twit = require('twit');
var T = new Twit({
	consumer_key: '';
	consumer_secret: '';
	access_token: '';
	access_token_secret: '';
});

T.get('account/verify_credentials', {
	include_entities: false,
	skip_status: true,
	include_email: false
}, onAuthenticated)

function onAuthenticated(err, res){
	if(err){
		throw err
	}

	console.log('Authentication successful. Running bot ...\r\n');

	var stream = T.stream('user');
}