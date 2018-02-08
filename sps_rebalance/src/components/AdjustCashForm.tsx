import * as React from 'react';
import ButtonGroup from './common/ButtonGroup';
const { Icon } = require('react-fa');
import { AdjustCashFormProps } from '../types';

/**
 * AdjustCashForm - A form component for adjust cash data
 */
class AdjustCashForm extends React.Component<AdjustCashFormProps, {}> {
    render() {
        const {
          mainClass = '',
          actionValue = ''
        } = this.props;
        return (
            <div className={'form-horizontal col-sm-12 adjustCashForm ' + mainClass}>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="control-label font-weight-normal">Please select your action below:</label>
                        <ButtonGroup
                            onRadioChange={this.props.onCheckChange}
                            checkedRadio={this.props.actionType}
                            buttonType="radio"
                            buttons={[
                                { text: 'Withdraw', type: 'radio', name: 'actions' },
                                { text: 'Addition', type: 'radio', name: 'actions' }
                            ]}
                        />
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter value"
                                onChange={this.props.onValueChange}
                                value={actionValue}
                            />
                            <span className="input-group-btn">
                                <button
                                    type="button"
                                    className="btn btn-default btn-transparent"
                                    onClick={this.props.onClearClick}
                                >
                                    <Icon name="refresh" />
                                    <span className="clearText">Clear</span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdjustCashForm;
