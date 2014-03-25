App.PostEditController = Ember.ObjectController.extend({
  actions: {
    updatePost: function() {
      var post = this.get('content');
      post.set('title', this.get('title'));
      post.set('body', this.get('body'));
      var controller = this;
      post.save().then(function() {
        console.log('post saved!');
        controller.transitionTo('post');
      }, function() {
        alert('failed to save post!');
      });
    }
  }
});