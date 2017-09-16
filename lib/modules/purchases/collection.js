import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';

import Dates from '/lib/schemas/Dates';

const Purchases = new Mongo.Collection('purchases');

const Purchase = new SimpleSchema({
  activityId: SimpleSchema.RegEx.Id,
  timeSpent: Number,
}).extend(Dates);

Purchases.attachSchema(Purchase);

export default Purchases;
