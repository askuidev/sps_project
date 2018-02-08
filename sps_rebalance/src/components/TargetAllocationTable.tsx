import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
const { connect } = require('react-redux');
import {
  getAllocationData,
  handleAdjustCashModal,
  updateAllocationTargetData
} from '../actions';
import Table from './common/Table';
import TableControls from './common/Table/TableControls';
import Panel from './common/Panel';
import AdjustCashModal from './AdjustCashModal';
import {
  TargetAllocationProps,
  TargetAllocationState,
  ChangeAllocationData
} from '../types';

class TargetAllocationTable extends React.Component<
  TargetAllocationProps,
  TargetAllocationState
> {
  constructor(props: TargetAllocationProps) {
    super(props);

    // setting the default active button
    this.state = {
      leftGroupActive: 'summary',
      middleGroupActive: 'percent'
    };
  }
  // first time calling the allocationData api to load allocationData
  componentWillMount() {
    this.props.getAllocationData();
  }
  // setting the default active button on click of left button group
  onLeftGroupClick = (leftGroupActive: string) => {
    this.setState({
      leftGroupActive
    });
  }
  // setting the default active button on click of middle button group
  onMiddleGroupClick = (middleGroupActive: string) => {
    this.setState({
      middleGroupActive
    });
  }
  // dispatching the function to handle(open/hide) adjust cash modal on click of 'adjust cash' link in the table row
  onAdjustCashClick = (data: {}) => {
    //this.updateAllData();
    this.props.handleAdjustCashModal({ type: 'open', data });
  }
  // dispatching the function to update allocationData on change of percentage and price fields
  onDataChange = ({ value, id, field }: ChangeAllocationData, callback: () => void) => {
    const { allocationData } = this.props;
    const updateSuccess = this.props.updateAllocationTargetData(allocationData, { value, id, field });
    updateSuccess.then(() => {
      callback();
      this.props.getAllocationData();
    });
  }
  // subheader for the panel heading, subheader can be any content
  getSubHeader() {
    const { leftGroupActive, middleGroupActive } = this.state;
    return (
      <TableControls
        leftGroupActive={leftGroupActive}
        middleGroupActive={middleGroupActive}
        onLeftGroupClick={this.onLeftGroupClick}
        onMiddleGroupClick={this.onMiddleGroupClick}
      />
    );
  }
  // call this method to get updated data from the server
  updateAllData = () => {
    return this.props.getAllocationData();
  }
  render() {
    const { showAdjustCashModal, allocationData } = this.props;
    const { middleGroupActive } = this.state;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        {showAdjustCashModal ? (
          <AdjustCashModal
            showAdjustCashModal={showAdjustCashModal}
            getAllData={this.updateAllData}
          />
        ) : (
          ''
        )}
        <Panel
          mainClass="allocationPanel securityTargetPanel panel-transparent"
          titleText="Set Security Target"
          subHeadingChildren={this.getSubHeader()}
        >
          <div className="targetAllocationTableContainer">
            <Table
              fieldType={middleGroupActive}
              onAdjustCashClick={this.onAdjustCashClick}
              onDataChange={this.onDataChange}
              allocationData={allocationData}
              {...this.props}
            />
          </div>
          <div className="targetAllocationTableControls width-100 clearfix">
            <span className="pull-left">
              <button className="btn btn-transparent color-light-blue cancel-btn">
                Cancel
              </button>
            </span>
            <span className="pull-right">
              <button className="btn btn-transparent color-light-blue remove-security-btn">
                Remove Security Target
              </button>
              <button className="btn btn-transparent color-light-blue save-btn">
                Save
              </button>
              <button className="btn btn-light-blue active continue-btn">
                Continue Auto Rebalance
              </button>
            </span>
          </div>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state: TargetAllocationProps) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<TargetAllocationProps>) => {
  return {
    ...bindActionCreators(
      {
        getAllocationData,
        handleAdjustCashModal,
        updateAllocationTargetData
      },
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TargetAllocationTable
);
