import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import Purchases from '/lib/modules/purchases';

import TimeUnspentBar from './TimeUnspentBar';

const composer = ({currentDate}, onData) => {
  const purchasesSub = Meteor.subscribe('purchases.forWeek', {currentDate});

  if (purchasesSub.ready()) {
    const purchases = Purchases.find().fetch();
    const timeSpent = purchases.reduce((sum, purchase) => sum + purchase.timeSpent, 0);

    onData(null, {
      timeSpent,
    });
  }
};

export default composeWithTracker(composer)(TimeUnspentBar, TimeUnspentBar.LoadingState);
