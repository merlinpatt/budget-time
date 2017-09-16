import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

import Option from './Option.container';

const ActivitySelect = ({activities, styles}) => {
  const currentDate = new Date();

  return (
    <select name="activityId" {...css(styles.select)}>
      {activities.map(({_id, name, time}) =>
        <Option key={name} activityId={_id} {...{currentDate, name, time}} />
      )}
    </select>
  );
};

ActivitySelect.displayName = 'ActivitySelect';

ActivitySelect.propTypes = forbidExtraProps({
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

const withStylesContainer = withStyles(({colors, units}) => ({
  select: {
    width: '100%',
    padding: units(1),
    background: colors.black,
    color: colors.white,
    border: `1px solid ${colors.white}`,
    fontSize: units(2),
  },
}));

ActivitySelect.LoadingState = withStylesContainer(({styles}) =>
  <select {...css(styles.select)} disabled={true}><option>Finding activities...</option></select>
);

export default withStylesContainer(ActivitySelect);
