import React, { Component, Fragment } from 'react';

export default class Full extends Component {
  render () {
    return (<Fragment>{this.props.content}</Fragment>)
  }
}