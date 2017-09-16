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

  changeValue = (event) => {
    const input = event.target;
    const value = input.value;
    this.setState({value});
  }

  render() {
    const {min, max, name, step, styles} = this.props;
    const {value} = this.state;

    return (
      <div>
        <Row>
          <input
            {...css(styles.input)}
            id={name}
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            type="number"
            onChange={this.changeValue}
          />
          <div {...css(styles.buttons)}>
            <button onClick={this.increase}>
              +
            </button>
            <button onClick={this.decrease}>
              -
            </button>
          </div>
        </Row>

        <label {...css(styles.label)} htmlFor={name}>
          {name}
        </label>
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
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
};

export default withStyles(({units}) => ({
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    display: 'block',
    padding: units(1),
    margin: '0 auto',
  },

  label: {
    display: 'block',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
}))(TimeInput);
