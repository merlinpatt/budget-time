import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, styleType, themeType, withStyles} from '/client/styles/withStyles';

const Row = ({children, styles}) => {
  return (
    <div {...css(styles.row)}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';

Row.propTypes = forbidExtraProps({
  children: PropTypes.node.isRequired,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

export default withStyles(({breakpoints, units}) => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 0,

    [breakpoints.notSmall]: {
      flexDirection: 'row',
      width: `calc(100% + ${units(2)})`,
      marginLeft: units(-1),
    },
  },
}))(Row);
