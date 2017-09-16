import {Meteor} from 'meteor/meteor';

import Users from '/lib/modules/users';

Meteor.publish(null, function () {
  if (! this.userId) {
    return null;
  }

  return Users.find(this.userId, {
    fields: {
      emails: 1,
      profile: 1,
      roles: 1,
      username: 1,
    },
  });
});
