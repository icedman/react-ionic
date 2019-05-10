import React, { Component, Fragment } from 'react';

export default class Full extends Component {
  render () {
    return <Fragment>
      <div className="ion-page">
      <ion-content>{this.props.content}</ion-content>
      </div>
    </Fragment>
  }
}