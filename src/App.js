import React from 'react';
import { Transition } from 'react-spring/renderprops';

import BreathHelper from './breath-helper/BreathHelper';

import './App.css';


const steps = ['Inhale', 'Hold', 'Exhale', 'Hold']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this.interval = null;
  }
  
  nextMessage = () => {
    this.setState({ step: (this.state.step + 1) % steps.length });
  }
  
  componentDidMount() {
    this.interval = setInterval(this.nextMessage, 3700);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const step = this.state.step;        
    return (
      <div className="App">
        <Transition
          items={step}
          from={{ position: 'absolute', opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {step =>
            props => <BreathHelper animProps={props} msg={steps[step]} />
          }
        </Transition>
      </div> 
    )
  }
}

export default App;
