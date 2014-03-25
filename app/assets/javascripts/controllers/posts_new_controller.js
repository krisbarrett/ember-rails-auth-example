App.PostsNewController = Ember.Controller.extend({
  actions: {
    createPost: function() {
      var post = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      });
      var self = this;
      post.save().then(function() {
        console.log('post created!');
        self.transitionTo('post', post);
        self.set('title', '');
        self.set('body', '');
      }, function() {
        alert('failed to create post!');
      });
    }
  }
});