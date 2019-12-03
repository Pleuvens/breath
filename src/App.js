import React from 'react';
import { Transition } from 'react-spring/renderprops';

import BreathHelper from './breath-helper/BreathHelper';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toggle: true
    };
    this.interval = null;
}

toggleMessage = () => {
    this.setState({ toggle: !this.state.toggle });
}

componentDidMount() {
    this.interval = setInterval(this.toggleMessage, 6000);
}

componentWillUnmount() {
    clearInterval(this.interval);
}
  render() {
    const toggle = this.state.toggle;        
        return (
            <div className="App">
<Transition
                items={toggle}
                from={{ position: 'absolute', opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {toggle =>
                    toggle
                    ? props =>  <BreathHelper animProps={props} msg="Inhale" />
                    : props =>  <BreathHelper animProps={props} msg="Exhale" />
                }
            </Transition>
            </div>
            
       )
  }
}

export default App;
