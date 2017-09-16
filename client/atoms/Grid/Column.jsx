import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, styleType, themeType, withStyles} from '/client/styles/withStyles';

const Column = ({children, offset, size, styles}) => {
  return (
    <div {...css(styles.column, styles[`columnPercent${size}`], styles[`columnOffset${offset}`])}>
      {children}
    </div>
  );
};

Column.displayName = 'Column';

const sizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];

Column.propTypes = forbidExtraProps({
  children: PropTypes.node,
  offset: PropTypes.oneOf([...sizes, 33, 67]),
  size: PropTypes.oneOf([...sizes, 33, 67]),
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

Column.defaultProps = {
  children: null,
  offset: null,
  size: null,
};

const sizeStyles = sizes.reduce((object, size) => ({
  ...object,
  [`columnOffset${size}`]: {marginLeft: `${size}%`},
  [`columnPercent${size}`]: {flex: `0 0 ${size}%`, maxWidth: `${size}%`},
}), {});
sizeStyles.columnOffset33 = {marginLeft: '33.3333%'};
sizeStyles.columnPercent33 = {flex: '0 0 33.3333%', maxWidth: '33.3333%'};
sizeStyles.columnOffset67 = {marginLeft: '66.6667%'};
sizeStyles.columnPercent67 = {flex: '0 0 66.6667%', maxWidth: '66.6667%'};

export default withStyles(({breakpoints, units}) => ({
  column: {
    display: 'block',
    flex: '1 1 auto',
    maxWidth: '100%',
    width: '100%',
    marginLeft: 0,

    [breakpoints.notSmall]: {
      padding: `0 ${units(1)}`,
    },
  },

  ...sizeStyles,
}))(Column);
