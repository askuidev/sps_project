import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
const { connect } = require('react-redux');
import { getAssetData } from '../actions';
import { getStyle } from '../utils';
import NoDataRow from './common/Table/NoDataRow';
import {
  DiffAllocationTableRowProps,
  DiffAllocationTableProps
} from '../types';

/**
 * TableRow - Table row component for the table
 */
class TableRow extends React.Component<DiffAllocationTableRowProps, {}> {
    // creates inline element style for the element
    getStyle(prop: string, value: string) {
        return getStyle({ prop, value });
    }
    // creates inline element style for the element
    getColorBox(color: string) {
        return <span className="square40" style={this.getStyle('backgroundColor', color)} />;
    }
    render() {
        const { color = '' } = this.props;
        return (
          <tr>
              <td style={this.getStyle('padding', '5px')}>{this.getColorBox(color)}</td>
              <td>{this.props.assetClass}</td>
              <td>{this.props.difference}</td>
          </tr>
        );
    }
}

/**
 * DifferenceAllocationTable - table for the assetData api
 */
class DifferenceAllocationTable extends React.Component<DiffAllocationTableProps, {}> {
    // first time calling the assetData api to load assetData
    componentWillMount() {
        this.props.getAssetData();
    }
    // rendering table rows from the assetData array
    renderRows() {
        const { assetData } = this.props;
        return assetData && assetData.map((row, index) => <TableRow key={index} {...row} />);
    }
    // creates inline element style for the element
    getStyle(prop: string, value: string | number) {
        return getStyle({ prop, value });
    }
    render() {
        const { assetData } = this.props;
        return (
            <div className="allocationTableContainer" id="allocationTableContainer">
                <div className="differenceAllocationTableContainer">
                    <table className="table fixed-table table-striped table-custom">
                        <thead>
                            <tr>
                                <td style={this.getStyle('width', 30)} />
                                <td style={this.getStyle('width', 100)}>Asset Class</td>
                                <td style={this.getStyle('width', 50)}>Difference</td>
                            </tr>
                        </thead>
                        {assetData && assetData[0] ?
                            <tbody>
                                {this.renderRows()}
                            </tbody> :
                            <NoDataRow colSpan={3} message="No data found!" />}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: DiffAllocationTableProps) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<DiffAllocationTableProps>) => {
  return {
    ...bindActionCreators(
      {
        getAssetData
      },
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DifferenceAllocationTable);
