App.PostsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post');
  }
});