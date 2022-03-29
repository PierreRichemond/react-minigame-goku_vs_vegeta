import React, { Component } from 'react';

const countHits = (WrappedComponent) => {

  class CountHits extends Component {
    state = {
      hits: 0
    }

    plusOne = () => {
      this.setState(prevState => {
        return {
          hits: prevState.hits += 1
        }
      })
    }

    componentDidUpdate(prevProps, prevState) {
      if(this.state !== prevState) {
        const componentName = WrappedComponent.name;
        this.props.reduceHandler(componentName);
      }
    }
    render() {
      return <WrappedComponent addOneHit={this.plusOne} hocState={this.state} {...this.props}/>
    }
  }
  return CountHits
}


export default countHits;
