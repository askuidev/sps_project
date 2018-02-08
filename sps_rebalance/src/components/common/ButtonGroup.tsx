import * as React from 'react';
const { Icon } = require('react-fa');
import {
  ButtonGroupProps,
  ButtonProps,
  RadioBtnProps,
  MyFormEvent
} from '../../types';

class ButtonGroup extends React.Component<ButtonGroupProps, {}> {
    // callback function for onButtonGroupClick event
    onButtonGroupClick = (field: string) => {
        const { onButtonGroupClick } = this.props;
        if (onButtonGroupClick) { onButtonGroupClick(field); }
    }
    // create button group for the list of button array
    getButtonGroup(buttons: ButtonProps[]) {
        const { withIcons, isGroup, activeBtn } = this.props;
        return buttons.map(({ text, field, iconClass, className = '' }: ButtonProps, index: number) => {
            let active = (isGroup && activeBtn === field) ? 'active' : '';
            let btnClassname = className ? className : 'btn-default';
            return (
                <button
                    key={index}
                    type="button"
                    className={'btn ' + active + ' ' + btnClassname}
                    onClick={this.onButtonGroupClick.bind(this, field)}
                >
                    {withIcons ?
                      <span>
                          <Icon name={iconClass} /> {text}
                      </span> : text}
                </button>
            );
        });
    }
    // check for the type of group either grouped or not
    getButtons() {
        const { mainClass = '', buttons = [{ text: 'Empty Button', field: 'emptyButton' }], grouped } = this.props;
        return (
          <div className={'button-group ' + mainClass}>
            {grouped ?
                <div className="btn-group grouped">
                    {this.getButtonGroup(buttons)}
                </div> : this.getButtonGroup(buttons)}
          </div>
        );
    }
    // callback function for onRadioClick event
    onRadioClick = (text: string, e: MyFormEvent) => {
        const { onRadioChange } = this.props;
        this.setState({ checkedRadio: text });
        if (onRadioChange) { onRadioChange(text, e); }
    }
    // create input type radio box with label
    getRadioButton(data: RadioBtnProps, index: number) {
        const { checkedRadio } = this.props;
        const {
            name,
            type,
            text
        } = data;
        return (
          <div className="checkbox" key={index}>
              <label>
                  <input
                      type={type}
                      name={name}
                      checked={checkedRadio === text}
                      onClick={this.onRadioClick.bind(this, text)}
                  /> {text}
              </label>
          </div>
        );
    }
    // get all the radio button elements for the radio button array
    getRadioButtons( buttons: RadioBtnProps[] ) {
        return buttons.map((obj: RadioBtnProps, index: number) => {
            return this.getRadioButton(obj, index);
        });
    }
    render() {
        const { buttonType, buttons } = this.props;

        // check type of button need to create, either radio or button
        return buttons ? (
          <div>
              {buttonType === 'button' ?
                  this.getButtons() : null}
              {buttonType === 'radio' ?
                  this.getRadioButtons(buttons) : null}
          </div>
        ) : (
          <div />
        );
    }
}

export default ButtonGroup;
