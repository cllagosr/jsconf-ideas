Meteor.publish('ideas', function(){
	return Ideas.find();
});

Meteor.publish('oneIdea', function(ideaId){
	return Ideas.find({_id: ideaId});
});

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'services': 1}});
});