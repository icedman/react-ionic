import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  render () {
    return (<Fragment>{this.props.content}</Fragment>)
  }
}