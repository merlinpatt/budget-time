import {forbidExtraProps} from 'airbnb-prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

import TimeUnspentChart from '/client/modules/activities/TimeUnspentChart';
import SpendTimeForm from '/client/modules/purchases/SpendTimeForm';

const BudgetTime = ({styles}) => {
  return (
    <div {...css(styles.app)}>
      <h1 {...css(styles.header)}>
        BudgetTime
      </h1>
      <div {...css(styles.header, styles.headerFake)} />
      <TimeUnspentChart />
      <SpendTimeForm />
    </div>
  );
};

BudgetTime.displayName = 'BudgetTime';

BudgetTime.propTypes = forbidExtraProps({
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

export default withStyles(({colors, units}) => ({
  app: {
    height: '100%',
  },

  header: {
    position: 'fixed',
    zIndex: 100,
    right: 0,
    left: 0,
    height: units(3.7),
    backgroundColor: colors.black,
    textAlign: 'center',
  },

  headerFake: {
    position: 'static',
    visibility: 'hidden',
  },
}))(BudgetTime);
