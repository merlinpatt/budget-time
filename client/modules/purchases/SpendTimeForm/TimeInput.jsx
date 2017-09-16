import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {css, withStyles, styleType, themeType} from '/client/styles/withStyles';

import {Row, Column} from '/client/atoms/Grid';

class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    const {min} = this.props;
    this.state = {value: min};
  }

  increase = (event) => {
    event.preventDefault();
    const {max, step} = this.props;
    const {value} = this.state;
    this.setState({value: value + step >= max ? max : value + step});
  }

  decrease = (event) => {
    event.preventDefault();
    const {min, step} = this.props;
    const {value} = this.state;
    this.setState({value: value - step <= min ? min : value - step});
  }

  render() {
    const {min, max, name, step, styles, theme: {colors}} = this.props;
    const {value} = this.state;

    const color = name === "hours" ? colors.green : colors.grey;
    const backgroundStyle = {background: color};
    const colorStyle = {color};

    return (
      <div {...css(styles.row)}>
        <label {...css(styles.label, colorStyle)} htmlFor={name}>
          {name}
          <input
            {...css(styles.input, colorStyle)}
            id={name}
            name={name}
            disabled={true}
            min={min}
            max={max}
            step={step}
            value={value}
            type="number"
          />
        </label>
        <div {...css(styles.buttons)}>
          <button onClick={this.increase} {...css(styles.button, backgroundStyle)}>
            +
          </button>
          <button onClick={this.decrease} {...css(styles.button, backgroundStyle)}>
            -
          </button>
        </div>
      </div>
    );
  }
}

TimeInput.displayName = 'TimeInput';

TimeInput.propTypes = forbidExtraProps({
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  step: PropTypes.number,
  styles: styleType.isRequired,
  theme: themeType.isRequired,
});

TimeInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default withStyles(({colors, units}) => ({
  button: {
    border: 0,
    padding: `${units(0.2)} ${units(2)}`,
    boxShadow: `inset 0 -1px ${colors.black}`,
    font: `bold ${units(2.2)} Arial`,
    cursor: 'pointer',
    transitions: 'opacity 0.3s',

    ':hover': {
      opacity: 0.8,
    },
  },

  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    display: 'block',
    width: '100%',
    padding: 0,
    border: 0,
    background: colors.black,
    font: `bold ${units(3)} Arial`,
    textAlign: 'center',
    pointerEvents: 'none',

    '::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
  },

  label: {
    display: 'block',
    font: `bold ${units(1.5)} Arial`,
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  row: {
    display: 'flex',
    width: '50%',
  },
}))(TimeInput);
