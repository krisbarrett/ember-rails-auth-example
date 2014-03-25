App.PostEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('post');
  }
});