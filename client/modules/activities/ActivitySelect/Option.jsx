import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

const Option = ({activityId, name, time, timeSpent}) => {
  const spentUp = time - timeSpent === 0;

  return (
    <option disabled={spentUp} value={activityId}>
      {name}
      {spentUp && ' (You spent your time)'}
    </option>
  );
};

Option.displayName = 'Option';

Option.propTypes = forbidExtraProps({
  activityId: PropTypes.string.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  timeSpent: PropTypes.number,
});

Option.defaultProps = {
  timeSpent: 0,
};

Option.LoadingState = () => (<option disabled={true} />);

Option.LoadingState.displayName = 'Option.LoadingState';

export default Option;
