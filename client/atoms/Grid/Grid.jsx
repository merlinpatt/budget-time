import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import Column from './Column';
import Row from './Row';

/*
 * Grid forms a grid that
 *   has as many columns as specified
 *   with SomeComponent at each (row, column) pair
 *   which takes props from each item of propItems
 *   which uses keyProp as the key for each column
 *
 * Call like so
 *   const propItems = [{someProp, anotherProp}, ..., {someProp, anotherProp}];
 *   const constantProps = {anotherProp, yetAnotherProp};
 *   <Grid
 *     columns={3}
 *     component={SomeComponent}
 *     constantProps={constantProps}
 *     end={SomeEndComponent}
 *     keyProp="somePropName"
 *     propItems={propItems}
 *   />
 *
 * The propItems array should be formatted before passing it into Grid
 */
const Grid = ({columns: columnCount, component, constantProps, end, keyProp, propItems}) => {
  const Component = component;
  const End = end;

  const rowCount = Math.ceil(propItems.length / columnCount);
  const rows = Array.from(Array(rowCount), (row, index) =>
    propItems.slice(index * columnCount, (index * columnCount) + columnCount)
  );

  const lastRowIndex = rows.length - 1;
  const lastRow = rows[lastRowIndex] || [];

  const extraColumnCount = columnCount - lastRow.length - (end ? 1 : 0);
  const endOnNewRow = extraColumnCount === -1;
  const extraColumns = [...Array(endOnNewRow ? columnCount - 1 : extraColumnCount).keys()];

  /* eslint-disable react/no-array-index-key */
  return (
    <div>
      {rows.map((row, rowIndex) => (
        <Row key={`row.${rowIndex}`}>

          {row.map(props => (
            <Column key={`column.${props[keyProp]}`}>
              <Component {...props} {...constantProps} />
            </Column>
          ))}

          {! endOnNewRow && rowIndex === lastRowIndex && end &&
            <Column>
              <End />
            </Column>
          }

          {! endOnNewRow && rowIndex === lastRowIndex && extraColumns.map(index =>
            <Column key={`extraColumn.${index}`} />
          )}

        </Row>
      ))}

      {endOnNewRow &&
        <Row>
          <Column>
            <End />
          </Column>
          {extraColumns.map(index =>
            <Column key={`extraColumn.${index}`} />
          )}
        </Row>
      }
    </div>
  );
  /* eslint-enable react/no-array-index-key */
};

Grid.displayName = 'Grid';

Grid.defaultProps = {
  constantProps: {},
  end: null,
};

Grid.propTypes = forbidExtraProps({
  columns: PropTypes.number.isRequired,
  constantProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  component: PropTypes.func.isRequired,
  end: PropTypes.element,
  keyProp: PropTypes.string.isRequired,
  propItems: PropTypes.arrayOf(PropTypes.object).isRequired,
});

Grid.defaultProps = {
  constantProps: {},
  end: null,
};

export default Grid;
