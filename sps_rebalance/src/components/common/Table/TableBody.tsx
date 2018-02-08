import * as React from 'react';
import TableRow from './TableRow';
import { TableRowDataProps, TableBodyProps } from '../../../types';

class TableBody extends React.Component<TableBodyProps, {}> {
    // render table body rows from the allocationData array
    renderRows() {
        const { allocationData, fieldType } = this.props;
        return allocationData && allocationData[0] && allocationData.map((row: TableRowDataProps) => (
            <TableRow
                key={row.id}
                rowData={row}
                fieldType={fieldType}
                onDataChange={this.props.onDataChange}
                onAdjustCashClick={this.props.onAdjustCashClick}
            />
        ));
    }
    render() {
        return (
          <tbody>
              {this.renderRows()}
          </tbody>
        );
    }
}

export default TableBody;
