import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import Activities from '/lib/modules/activities';

import TimeUnspentChart from './TimeUnspentChart';

const composer = (noProps, onData) => {
  const activitiesSub = Meteor.subscribe('activities.forCurrentUser');

  if (activitiesSub.ready()) {
    const activities = Activities.find({}, {sort: {fixed: 1, time: -1}}).fetch();

    onData(null, {
      activities,
    });
  }
};

export default composeWithTracker(composer)(TimeUnspentChart, TimeUnspentChart.LoadingState);
