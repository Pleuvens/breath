import React from 'react';
import { Spring } from 'react-spring/renderprops'

import './BreathHelper.scss';

class BreathHelper extends React.Component {

    render() {
        return (
            <div style={this.props.animProps} className="breath-helper breath-helper-anim">
                <div>{this.props.msg}</div>
                <Spring
                    from={{ transform: 'scaleX(0)' }}
                    to={{ transform: 'scaleX(1)' }}>
                    {props => <span style={props} className="top"></span>}
                </Spring>
                <Spring
                    from={{ transform: 'scaleY(0)' }}
                    to={{ transform: 'scaleY(1)' }}>
                    {props => <span style={props} className="right"></span>}
                </Spring>
                <Spring
                    from={{ transform: 'scaleX(0)' }}
                    to={{ transform: 'scaleX(1)' }}>
                    {props => <span style={props} className="bottom"></span>}
                </Spring>
                <Spring
                    from={{ transform: 'scaleY(0)' }}
                    to={{ transform: 'scaleY(1)' }}>
                    {props => <span style={props} className="left"></span>}
                </Spring>
            </div>
        )
    }
}
export default BreathHelper;