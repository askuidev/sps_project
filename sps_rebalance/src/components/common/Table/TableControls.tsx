import * as React from 'react';
import ButtonGroup from '../../common/ButtonGroup';
import { TableControlsProps } from '../../../types';

class TableControls extends React.Component<TableControlsProps, {}> {
    // callback function for left button group click event
    onLeftGroupClick = (leftGroupActive: string) => {
        const { onLeftGroupClick } = this.props;
        if (onLeftGroupClick) { onLeftGroupClick(leftGroupActive); }
    }
    // callback function for middle button group click event
    onMiddleGroupClick = (middleGroupActive: string) => {
        const { onMiddleGroupClick } = this.props;
        if (onMiddleGroupClick) { onMiddleGroupClick(middleGroupActive); }
    }
    render() {
        const { leftGroupActive, middleGroupActive } = this.props;
        return (
          <div className="width-100 clearfix">
              <div className="width-50 float-left no-padding">
                  <ButtonGroup
                      onButtonGroupClick={this.onLeftGroupClick}
                      grouped={false}
                      isGroup={true}
                      withIcons={false}
                      mainClass="pull-left"
                      activeBtn={leftGroupActive}
                      buttonType="button"
                      buttons={[
                          { text: 'Summary', field: 'summary', className: 'btn-light-blue' },
                          { text: 'Expanded', field: 'expanded', className: 'btn-light-blue' },
                          { text: 'Deep', field: 'deep', className: 'btn-light-blue' }
                      ]}
                  />
              </div>
              <div className="width-50 float-left no-padding">
                  <ButtonGroup
                      onButtonGroupClick={this.onMiddleGroupClick}
                      grouped={true}
                      isGroup={true}
                      withIcons={true}
                      mainClass="pull-left fieldTypeGroup"
                      activeBtn={middleGroupActive}
                      buttonType="button"
                      buttons={[
                          { iconClass: 'percent', field: 'percent', className: 'btn-light-blue' },
                          { iconClass: 'dollar', field: 'dollar', className: 'btn-light-blue' }
                      ]}
                  />
              </div>
          </div>
        );
    }
}

export default TableControls;
