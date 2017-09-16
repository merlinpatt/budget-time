import {Meteor} from 'meteor/meteor';

import Activities from '/lib/modules/activities';

const activities = [
  {name: 'ClassTracks', time: 55},
  {name: 'Social', time: 10},
  {name: 'Reading', time: 10},
  {name: 'Betamore Courses', time: 6},
  {name: 'Escape Unlocked', time: 6},
  {name: 'TV, Games, Movies', time: 5},
  {name: 'Biking, Exercise, Travel', time: 4},
  {name: 'Eating', time: 1},
  {name: 'Time Tracking', time: 1},

  {name: 'Sleep', time: 56, fixed: true},
  {name: 'Baltimaze', time: 12, fixed: true},
  {name: 'Shave, Shower, Brush Teeth', time: 1, fixed: true},
  {name: 'Dog', time: 1, fixed: true},
].map(activity => ({...activity, time: activity.time * 60}));

Meteor.startup(() => {
  if (! Activities.find().count()) {
    activities.forEach(activity => Activities.insert(activity));
  }
});
