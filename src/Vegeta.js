import vegeta from './vegeta.png';
import React, { Component } from 'react';
import countHits from './countHits';

export class Vegeta extends Component {


  render() {
    const {name, addOneHit, hocState, life} = this.props
    const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className='badge badge-danger'>Dead</span></td>);
    const button = life > 0 ? (<button className='btn btn-success m-3' onClick={addOneHit}>{name} frappe</button>)
    : (<button className='btn btn-danger m-3' disabled >Mort</button>);
    return (
      <div className ='col'>
        <img src={vegeta} alt='Vegeta'/>
        <br />
        {button}

        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope ='col'>coups</th>
              <th scope='col'>vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Vegeta);
