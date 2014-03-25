// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('posts');
  this.resource('post', {path: 'post/:post_id'});
});
