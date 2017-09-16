import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

const TimeUnspentBar = ({index, name, time, timeSpent, styles}) => {
  const timeInHours = (time / 60).toFixed(2).replace(/[.]00/, '');
  const timeLeftInHours = ((time - timeSpent) / 60).toFixed(2).replace(/[.]00/, '');
  const barWidth = {width: `${100 * (1 - (timeSpent / time))}%`};

  const evenStyle = index % 2 === 0 && styles.progressEven;
  const timeGoneStyle = time - timeSpent === 0 && styles.timeGone;

  return (
    <div {...css(styles.bar, timeGoneStyle)}>
      <div {...css(styles.progress, barWidth, evenStyle)} />
      <div {...css(styles.text)}>
        <span style={{width: '60%'}}>
          {name}
        </span>
        <span style={{textAlign: 'right', width: '10%'}}>
          {timeLeftInHours}
        </span>
        <span style={{textAlign: 'right', width: '20%'}}>
          left of
        </span>
        <span style={{textAlign: 'right', width: '10%'}}>
          {timeInHours}
        </span>
      </div>
    </div>
  );
};

TimeUnspentBar.displayName = 'TimeUnspentBar';

TimeUnspentBar.propTypes = forbidExtraProps({
  activityId: PropTypes.string.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  timeSpent: PropTypes.number,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

TimeUnspentBar.defaultProps = {
  timeSpent: 0,
};

TimeUnspentBar.LoadingState = ({name}) => (
  <div style={{padding: '1rem', marginBottom: '1rem'}}>{name}: gathering data for activity...</div>
);

TimeUnspentBar.LoadingState.displayName = 'TimeUnspentBar.LoadingState';

TimeUnspentBar.LoadingState.propTypes = forbidExtraProps({
  activityId: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  currentDate: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
  index: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
});

export default withStyles(({colors, units}) => ({
  bar: {
    position: 'relative',
    marginBottom: units(1),
  },

  progress: {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    height: '100%',
    background: colors.grey,
  },

  progressEven: {
    background: colors.green,
  },

  text: {
    display: 'flex',
    padding: units(1),
  },

  timeGone: {
    textDecoration: 'line-through',
    opacity: 0.7,
  },
}))(TimeUnspentBar);
