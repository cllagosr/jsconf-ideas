Ideas = new Mongo.Collection('ideas');

Ideas.allow({
	insert: function(userId, idea){
		idea.insertDate = Date.now();
		return userId && idea && idea.userId === userId;
	},

	remove: function(userId, idea){
		return userId && userId === idea.userId;
	},

	update: function(userId){
		return userId;
	}
})