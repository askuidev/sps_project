import * as React from 'react';
import { CheckboxProps } from '../../types';

/**
 * Checkbox - A styled checkbox component
 */
export default class Checkbox extends React.Component<CheckboxProps, {}> {
    onChange = (id: number, e: object) => {
        if (this.props.onChange) {
            this.props.onChange(id, e);
        }
    }
    render() {
        const { id } = this.props;
        return (
          <input
              onChange={this.onChange.bind(this, id)}
              type="checkbox"
          />
        );
    }
}
