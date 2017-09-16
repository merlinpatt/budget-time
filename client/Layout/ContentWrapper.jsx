import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

const ContentWrapper = ({content, styles}) => {
  return (
    <div {...css(styles.container)}>
      {content}
    </div>
  );
};

ContentWrapper.displayName = 'ContentWrapper';

ContentWrapper.propTypes = forbidExtraProps({
  content: PropTypes.element.isRequired,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

export default withStyles(({units}) => ({
  container: {
    width: '100%',
    maxWidth: units(62),
    height: '100%',
    padding: `0 ${units(1)}`,
    margin: '0 auto',
  },
}))(ContentWrapper);
