import React, { Component } from 'react'

export class ClassComp extends Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        console.log("componentDidMount çalıştı..")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate çalıştı..")
    }

    increase = () =>  {
        this.setState({counter: this.state.counter + 1})
    }
  render() {
    return (
      <div>
        <h2>Class  Component</h2>
        <p>Counter : {this.state.counter}</p>
        <button onClick={() => this.increase()} > Increase</button>
        
      </div>
    )
  }
}

export default ClassComp

