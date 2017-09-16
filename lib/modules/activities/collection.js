import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';

import Dates from '/lib/schemas/Dates';

const Activities = new Mongo.Collection('activities');

const Activity = new SimpleSchema({
  name: String,
  time: Number,
  fixed: {
    type: Boolean,
    optional: true,
  },
}).extend(Dates);

Activities.attachSchema(Activity);

export default Activities;
