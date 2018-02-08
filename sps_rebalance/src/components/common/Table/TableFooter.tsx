import * as React from 'react';
import ButtonGroup from '../ButtonGroup';
import {
    getCalculatedTotal
} from '../../../utils';
import {
  TableFooterProps,
  TableFooterState,
  MyFormEvent
} from '../../../types';

class TableFooter extends React.Component<TableFooterProps, TableFooterState> {
    constructor(props: TableFooterProps) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    // get search box input
    getSearchInput() {
        return (
          <div className="input-group allocationSearchInput">
              <input
                type="text"
                className="form-control"
                onChange={this.onSearchChange}
                value={this.state.searchText}
                placeholder="Add symbol/CUSIP"
              />
          </div>
        );
    }
    // get advanced search link
    getAdvancedSearchLink() {
        return <a className="color-light-blue" href="/">Advanced Security Search</a>;
    }
    // get save security traget button
    getSaveSecurityTargetBtn() {
        return <button className="btn btn-light-blue">Save Security Target</button>;
    }
    // get footer button group buttons
    getActionBtns() {
        return (
          <ButtonGroup
              grouped={false}
              isGroup={false}
              withIcons={false}
              mainClass="pull-right"
              buttonType="button"
              buttons={[
                  { text: 'Cancel', className: 'btn-transparent color-light-blue' },
                  { text: 'Continue Auto Rebalance', className: 'btn-light-blue active' }
              ]}
          />
        );
    }
    // update searchText state onSearchChange event
    onSearchChange = (e: MyFormEvent) => {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        const { allocationData: data } = this.props;
        return data ? (
            <tfoot>
                <tr>
                    <td />
                    <td>Total:</td>
                    <td className="table-footer-cell-padding">{getCalculatedTotal(data, 'value')}</td>
                    <td>{getCalculatedTotal(data, 'currentPer')}</td>
                    <td className="text-center">{getCalculatedTotal(data, 'targetPer')}</td>
                    <td />
                    <td className="text-center">{getCalculatedTotal(data, 'targetPrice')}</td>
                    <td />
                    <td />
                </tr>
                <tr>
                    <td colSpan={3}>
                        <div className="pull-left">{this.getSearchInput()}</div>
                    </td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td colSpan={2}>
                      <div className="advancedSearchLink pull-right">{this.getAdvancedSearchLink()}</div>
                    </td>
                </tr>
            </tfoot>
          ) : (
            <tfoot />
          );
    }
}

export default TableFooter;
