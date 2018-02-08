/**
 * NoDataRow - This component is used when there is no data
 *
 * @prop {colSpan} - it will merge the given number of columns in the table
 * @prop {message} - it will show the message
 *
 */

import * as React from 'react';
import { NoDataRowProps } from '../../../types';

const NoDataRow = (props: NoDataRowProps) => {
    return (
      <tbody>
          <tr>
              <td colSpan={props.colSpan} className="table-footer-cell-padding text-center">{props.message}</td>
          </tr>
      </tbody>
    );
};

export default NoDataRow;
