import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import Activities from '/lib/modules/activities';

import ActivitySelect from './ActivitySelect';

const composer = (noProps, onData) => {
  const activitiesSub = Meteor.subscribe('activities.forCurrentUser');

  if (activitiesSub.ready()) {
    const activities = Activities.find().fetch();

    onData(null, {
      activities,
    });
  }
};

export default composeWithTracker(composer)(ActivitySelect, ActivitySelect.LoadingState);
