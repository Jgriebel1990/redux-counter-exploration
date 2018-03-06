import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './Counter';
import {  
    incrementByAction, 
    decrementByAction, } from './counter/actions'

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: 1
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
handleInputChange(e){
  this.setState({input: +e.target.value});
}
  render() {
    return (
      <div className='bg-clr'>
        <form>
            <input 
              className='input'
              type="number"
              onChange={this.handleInputChange}
              value={this.state.input}/>
        </form>
        <Counter {...this.props} {...this.state}/>
        <Counter {...this.props} {...this.state}/>
        <Counter {...this.props} {...this.state}/>
        <Counter {...this.props} {...this.state}/>
        <Counter {...this.props} {...this.state}/>
        <Counter {...this.props} {...this.state}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementBy: (num) => dispatch(incrementByAction(num)),
    decrementBy: (num) => dispatch(decrementByAction(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
