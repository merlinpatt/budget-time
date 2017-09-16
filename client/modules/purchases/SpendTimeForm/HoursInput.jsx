import {forbidExtraProps} from 'airbnb-prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

const HoursInput = ({styles}) => {
  return (
    <div>
      <input id="hours" name="hours" min="0" max="100" type="number" {...css(styles.input)} />
      <label {...css(styles.label)} htmlFor="hours">
        Hours
      </label>
    </div>
  );
};

HoursInput.displayName = 'HoursInput';

HoursInput.propTypes = forbidExtraProps({
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

export default withStyles(({units}) => ({
  input: {
    display: 'block',
    padding: units(1),
    margin: '0 auto',
  },

  label: {
    display: 'block',
    textAlign: 'center',
  },
}))(HoursInput);
