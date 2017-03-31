import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    editPost(post) {
      post.save()
      .then(() => this.transitionTo('posts'));
    },
    cancel() {
      history.back();
    }

  }
});
