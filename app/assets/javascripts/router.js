// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
  });
  this.resource('post', {path: 'post/:post_id'}, function() {
    this.route('edit');
  });
  this.route('sign_in');
  this.route('sign_out');
});
