import * as React from 'react';
const { Icon } = require('react-fa');
import {
    getStyle
} from '../../../utils';

class TableHeader extends React.Component {
    getStyle(prop: string, value: number) {
        return getStyle({ prop, value });
    }
    render() {
        return (
          <thead>
            <tr className="">
                <td style={this.getStyle('width', 80)}>Symbol</td>
                <td style={this.getStyle('width', 160)}>Description</td>
                <td style={this.getStyle('width', 80)}>Value</td>
                <td style={this.getStyle('width', 70)}>Current %</td>
                <td className="text-center" style={this.getStyle('width', 90)}>Target % <Icon name="info-circle" /></td>
                <td style={this.getStyle('width', 20)} />
                <td className="text-center" style={this.getStyle('width', 90)}>Target $</td>
                <td style={this.getStyle('width', 70)}>Drift %</td>
                <td style={this.getStyle('width', 120)}>Drift $ Buy/Sell</td>
            </tr>
          </thead>
        );
    }
}

export default TableHeader;
