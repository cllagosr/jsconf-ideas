Meteor.publish('ideas', function(){
	return Ideas.find();
});