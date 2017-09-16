import SimpleSchema from 'simpl-schema';
import {Meteor} from 'meteor/meteor';

import Dates from '/lib/schemas/Dates';

const Users = Meteor.users;

const Profile = new SimpleSchema({
  name: String,
});

const Email = new SimpleSchema({
  address: SimpleSchema.RegEx.Email,
  verified: Boolean,
}, {requiredByDefault: false});

const User = new SimpleSchema({
  emails: Email,
  profile: Profile,
  roles: {
    type: Array,
    optional: true,
  },
  'roles.$': String,
  services: {
    type: Object,
    blackbox: true,
  },
  status: {
    type: Object,
    blackbox: true,
    defaultValue: {},
  },
  username: {
    type: String,
    optional: true,
    sparse: true,
    unique: true,
  },
}).extend(Dates);

Users.attachSchema(User);

Users.deny({update: () => true});

export default Users;
