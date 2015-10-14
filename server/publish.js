Meteor.publish('ideas', function(){
	return Ideas.find();
});

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'services': 1}});
});