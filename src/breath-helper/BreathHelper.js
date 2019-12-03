import React from 'react';

import './BreathHelper.scss';

class BreathHelper extends React.Component {

    render() {
        return (
            <div style={this.props.animProps} className="breath-helper">
                <div>{this.props.msg}</div>
                <span class="top"></span>
                <span class="right"></span>
                <span class="bottom"></span>
                <span class="left"></span>
            </div>
        )
    }
}
export default BreathHelper;