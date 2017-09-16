import {Meteor} from 'meteor/meteor';

import Activities from '/lib/modules/activities';

Meteor.publish('activities.forCurrentUser', function () {
  return Activities.find();
});
