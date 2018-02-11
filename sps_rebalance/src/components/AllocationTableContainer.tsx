import * as React from 'react';
import '../App.css';
import TargetAllocationTable from './TargetAllocationTable';
import Panel from './common/Panel';
import DifferenceAllocationTable from './DifferenceAllocationTable';

/**
 * AllocationTableContainer - container for the Allocation Data Table
 */
class AllocationTableContainer extends React.Component<{}, {}> {
    render() {
        return (
            <div className="allocationPanelContainer">
                <div className="width-80 float-left no-padding">
                    <TargetAllocationTable />
                </div>
                <div className="width-20 float-right no-padding">
                    <Panel
                        mainClass="allocationPanel differenceAllocationPanel panel-transparent"
                        titleText="Security Allocation vs Target Allocation"
                    >
                        <DifferenceAllocationTable />
                    </Panel>
                </div>
            </div>
        );
    }
}

export default AllocationTableContainer;
