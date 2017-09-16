import {forbidExtraProps} from 'airbnb-prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

const MinutesInput = ({styles}) => {
  return (
    <div>
      <input id="minutes" name="minutes" min="0" max="59" step="10" type="number" {...css(styles.input)} />
      <label {...css(styles.label)} htmlFor="minutes">
        Minutes
      </label>
    </div>
  );
};

MinutesInput.displayName = 'MinutesInput';

MinutesInput.propTypes = forbidExtraProps({
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
}))(MinutesInput);
