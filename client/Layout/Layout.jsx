import PropTypes from 'prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

import ContentWrapper from './ContentWrapper';

const Layout = ({content, styles}) => {
  return (
    <div {...css(styles.layout)}>
      <ContentWrapper content={content} />
    </div>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  content: PropTypes.element.isRequired,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
};

export default withStyles(() => ({
  layout: {
    height: '100%',
  },
}))(Layout);
