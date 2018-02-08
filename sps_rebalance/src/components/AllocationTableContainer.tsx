import * as React from 'react';
import '../App.css';
import TargetAllocationTable from './TargetAllocationTable';

/**
 * AllocationTableContainer - container for the Allocation Data Table
 */
class AllocationTableContainer extends React.Component<{}, {}> {
    render() {
        return (
            <div className="allocationPanelContainer">
                <div className="width-80 no-padding">
                    <TargetAllocationTable />
                </div>
                {/*<div className="col-sm-3 no-padding">
                    <Panel
                        mainClass="allocationPanel differenceAllocationPanel panel-transparent"
                        titleText="Security Allocation vs Target Allocation"
                    >
                        <DifferenceAllocationTable />
                    </Panel>
                </div>*/}
            </div>
        );
    }
}

export default AllocationTableContainer;
