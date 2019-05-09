import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return <Fragment>
          <ion-header>
            <ion-toolbar>
              <ion-title>Header</ion-title>

              <ion-buttons slot="end">
                <Link to="/">
                  <ion-label>
                    Save
                  </ion-label>
                </Link>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>

          <ion-content main>
            {this.props.content}
          </ion-content>
      </Fragment>
  }
}