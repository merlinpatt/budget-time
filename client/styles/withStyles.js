import PropTypes from 'prop-types';
import {css, withStyles, ThemeProvider} from 'react-with-styles';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important';

import theme from './theme';

ThemedStyleSheet.registerDefaultTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

const styleType = PropTypes.object;
const themeType = PropTypes.object;

export {css, withStyles, ThemeProvider, ThemedStyleSheet, styleType, themeType};
