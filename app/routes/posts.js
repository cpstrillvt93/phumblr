import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  userId: JSON.parse(window.localStorage.getItem('storage:auth')).id,

  model () {
    let store = this.get('store');
    store.unloadAll('post');
    return store.findAll('post');
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    },
  }
});
