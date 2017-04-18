import styles from './index.scss';
import React from 'react';
import { Button } from './components/button';
import { RadioButton } from './components/radio-button';

export default class App extends React.Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      buttonTitle: "Initial",
      counter: 0
    };
    setInterval(()=> {
      this.setCount(this.state.counter + 1);
    }, 1000);
  }
  setCount(i) {
    this.setState({ 
      counter: i,
      buttonTitle: "Button " + i
    });
  }
  onButtonClick(args) {
    this.setCount(0);
  }
  onClickedChanged(args) {
    console.log(args);
  }
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>

        <Button text={this.state.buttonTitle} onClick={this.onButtonClick} onClickedChanged={this.onClickedChanged}></Button>
        <Button text={this.state.buttonTitle} onClick={this.onButtonClick} onClickedChanged={this.onClickedChanged}></Button>
        <Button text={this.state.buttonTitle} onClick={this.onButtonClick} onClickedChanged={this.onClickedChanged}></Button>
  
        <RadioButton buttons={[ 'Button 1', 'Button 2' ]}></RadioButton>
      </div>
    )
  }
}
