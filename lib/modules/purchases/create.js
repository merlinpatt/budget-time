import SimpleSchema from 'simpl-schema';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

import Purchases from './collection';

const create = new ValidatedMethod({
  name: 'purchases.create',
  validate: new SimpleSchema({
    activityId: SimpleSchema.RegEx.Id,
    timeSpent: Number,
  }).validator(),
  run({activityId, timeSpent}) {
    return Purchases.insert({activityId, timeSpent});
  },
});

export default create;
