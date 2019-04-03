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

	stream.on('follow', onFollowed)
	stream.on('error', onError)
}

function onFollowed(event){
	var name = event.source.name
	var screenName = event.source.screen_name
	var response  = '@' + screenName + 'new follower, this is an automated response bot built using NodeJS for ' + name 

	//tweet response to user here

	console.log('I was followed by: ' + name + '@' + screenName)
}

function onError(error){
	throw error
}

T.post('statuses/update', {
	status: response
}, onTweeted)

function onTweeted(err, reply){
	if(err !== undefined){
		console.log(err)
	} else {
		console.log('Tweeted: ' + reply.text)
	}
}