import Vegeta from './Vegeta'
import Goku from './Goku'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {Component} from 'react'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       vegeta: 100,
       goku: 100
    }
  }

  reduceLife = (params) => {
    if(params === 'Goku'){
      this.setState({
        vegeta: this.state.vegeta - 10
      })
    } else {
      this.setState({
        goku: this.state.goku - 10
      })
    }
  }

  render(){
    return (
      <div className="container text-center">
        <h1 className=''>Goku Vs Vegeta</h1>
        <hr />

        <div className='row'>
          <Vegeta name='Vegeta' life={this.state.vegeta} reduceHandler={this.reduceLife}/>
          <Goku name='Goku' life={this.state.goku} reduceHandler={this.reduceLife}/>
        </div>
      </div>
    );
  }
}

export default App;
