import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

Meteor.startup(() => {
  if (! Meteor.roles.find().count()) {
    const roles = [];
    roles.forEach(Roles.createRole);
  }
});
