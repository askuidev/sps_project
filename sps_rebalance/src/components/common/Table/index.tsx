/**
 * Table - It shows the content in the table with rows and columns
 *
 * @prop {tableClass} - baseClass to add custom styles to the table component
 *
 */

import * as React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import NoDataRow from './NoDataRow';
import { TableProps } from '../../../types';

const Table = (props: TableProps) => {
  const tableClass =
    'table fixed-table table-striped table-custom targetAllocationTable width-100 ' +
    props.tableClass;
  const { allocationData } = props;
  return allocationData && allocationData[0] ? (
    <table className={tableClass}>
      <TableHeader {...props} />
      <TableBody {...props} />
      <TableFooter {...props} />
    </table>
  ) : (
    <table className={tableClass}>
      <TableHeader {...props} />
      <NoDataRow colSpan={9} message="No data found!" />
    </table>
  );
};

export default Table;
