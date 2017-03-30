import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },

    error (reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      );
      let noContent = reason.errors && reason.errors.some((error) =>
        error.status === '404'
      );
      let emptyFields = reason.errors && reason.errors.some((error) =>
        error.status === '422'
      );
      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } if (noContent) {
          this.get('flashMessages')
          .danger('page does not exist');
          this.transitionTo('index');
      } if (emptyFields) {
          this.get('flashMessages')
          .danger('You must fill in both fields to create/edit a post');
          this.transitionTo('index');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
