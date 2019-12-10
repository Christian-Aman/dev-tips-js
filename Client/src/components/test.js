import React, { Component } from 'react';

export default class test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: { x: '' },
    };
  }

  myFunc = () => {
    let copy = this.state.key;
    console.log('State:', this.state.key, 'Copy:', copy);
    copy.x = 'FAIL';
    console.log('State:', this.state.key, 'Copy:', copy);
    copy.x = '';
  };

  myFunc2 = () => {
    let copy = { ...this.state.key };
    console.log('State:', this.state.key, 'Copy:', copy);
    copy.x = 'FAIL';
    console.log('State:', this.state.key, 'Copy:', copy);
  };

  render() {
    return (
      <div>
        <p>test</p>
        {this.myFunc()}
        {this.myFunc2()}
      </div>
    );
  }
}
