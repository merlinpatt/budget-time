import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css} from '/client/styles/withStyles';

import ActivityUnspentBar from './ActivityUnspentBar.container';
import WeekUnspentBar from './WeekUnspentBar.container';

const FORM_HEIGHT = 17.9;

const getChartHeight = (activityCount) => {
  const ACTIVITY_HEIGHT = 4.8;
  const HEADER_HEIGHT = 3.7;
  const FIXED_HEIGHT = FORM_HEIGHT + HEADER_HEIGHT;
  const REM_TO_PX = 10;
  const WEEK_ACTIVITY = 1;

  const html = document.documentElement;
  const body = document.body;
  const pageHeight = Math.max(
    html.clientHeight, html.scrollHeight, html.offsetHeight, body.scrollHeight, body.offsetHeight
  );

  const chartHeight = (activityCount + WEEK_ACTIVITY) * ACTIVITY_HEIGHT * REM_TO_PX;
  const spaceForChart = pageHeight - (FIXED_HEIGHT * REM_TO_PX);

  return spaceForChart >= chartHeight ? chartHeight : chartHeight + (FORM_HEIGHT * REM_TO_PX);
};

const TimeUnspentChart = ({activities}) => {
  const currentDate = new Date();

  const chartHeight = {height: getChartHeight(activities.length)};

  return (
    <div {...css(chartHeight)}>
      <WeekUnspentBar activityId="week" index={1} {...{currentDate, name: 'Entire Week', time: 168 * 60}} />
      {activities.map(({_id, name, time}, index) =>
        <ActivityUnspentBar key={_id} activityId={_id} index={index} {...{currentDate, name, time}} />
      )}
    </div>
  );
};

TimeUnspentChart.displayName = 'TimeUnspentChart';

TimeUnspentChart.propTypes = forbidExtraProps({
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
});

TimeUnspentChart.LoadingState = () => (
  <h3 style={loadingStyle}>Finding activities...</h3>
);

TimeUnspentChart.LoadingState.displayName = 'TimeUnspentChart.LoadingState';

const PADDING = 1;
const loadingStyle = {
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: `${FORM_HEIGHT + PADDING}rem`,
  left: 0,
  alignItems: 'center',
  justifyContent: 'center',
};

export default TimeUnspentChart;
