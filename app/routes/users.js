import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // let y = this.get('store').findAll('user');
    // console.log(y);
    return this.get('store').findAll('user');
  },
});
