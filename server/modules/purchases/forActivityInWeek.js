import {Meteor} from 'meteor/meteor';
import startOfWeek from 'date-fns/start_of_week';
import endOfWeek from 'date-fns/end_of_week';

import Purchases from '/lib/modules/purchases';

Meteor.publish('purchases.forActivityInWeek', function ({activityId, currentDate}) {
  const MONDAY = 1;
  const weekStart = startOfWeek(currentDate, {weekStartsOn: MONDAY});
  const weekEnd = endOfWeek(currentDate, {weekStartsOn: MONDAY});
  return Purchases.find({activityId, createdAt: {$gte: weekStart, $lt: weekEnd}});
});
