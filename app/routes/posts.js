import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let x = this.get('store').findAll('post');
    console.log(x);
    return this.get('store').findAll('post');
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    },
  }
});
