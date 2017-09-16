import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import Purchases from '/lib/modules/purchases';

import Option from './Option';

const composer = ({activityId, currentDate}, onData) => {
  const purchasesSub = Meteor.subscribe('purchases.forActivityInWeek', {activityId, currentDate});

  if (purchasesSub.ready()) {
    const purchases = Purchases.find({activityId}).fetch();
    const timeSpent = purchases.reduce((sum, purchase) => sum + purchase.timeSpent, 0);

    onData(null, {
      timeSpent,
    });
  }
};

export default composeWithTracker(composer)(Option, Option.LoadingState);
