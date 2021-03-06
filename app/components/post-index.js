import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    deletePost() {
      this.sendAction('deletePost', this.get('post'));
    },
    editPost() {
      this.sendAction('editPost', this.get('post'));
    }
  }

});
