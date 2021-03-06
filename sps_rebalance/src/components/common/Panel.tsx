import * as React from 'react';
import { PanelProps } from '../../types';

class Panel extends React.Component<PanelProps, {}> {
    render() {
        const {
            children,
            mainClass = '',
            headingClass = '',
            titleText = 'Title',
            bodyClass = '',
            mainHeadingChildren = '',
            subHeadingChildren = ''
        } = this.props;
        return (
            <div className={'panel panel-default ' + mainClass}>
                <div className={'panel-heading clearfix ' + headingClass}>
                    <div className="main-heading clearfix">
                        <h3 className="panel-title pull-left">{titleText}</h3>
                        {mainHeadingChildren}
                    </div>
                    <div className="sub-heading clearfix">
                        {subHeadingChildren}
                    </div>
                </div>
                <div className={'panel-body ' + bodyClass}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Panel;
