import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // console.log("got to post route");
    // let x = this.get('store').findRecord('post', params.post_id);
    // console.log(x);
    return this.get('store').findRecord('post', params.post_id);
  }
});
