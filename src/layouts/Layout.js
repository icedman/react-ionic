import React, { Component, Fragment } from 'react';
import Full from './Full';

export default class Layout extends Component {
  render() {
        let L = this.props.layout || Full;
        return (
            <L content={this.props.content}/>
        );
  }
}
