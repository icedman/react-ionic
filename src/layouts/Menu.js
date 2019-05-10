import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

// push, reveal, push, overlay

class Menu extends Component {
  render () {
    return <Fragment>
        <ion-menu name="menu" type="push">
          <div className="ion-page">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list>
                <ion-list-header>
                  Navigate
                </ion-list-header>
                <ion-menu-toggle auto-hide="false">
                  <Link to="/">
                    <ion-item button>
                      <ion-icon slot="start" name="home"></ion-icon>
                      <ion-label>
                        Home
                      </ion-label>
                    </ion-item>
                  </Link>
                </ion-menu-toggle>
                <Link to="/form">
                  <ion-item button>
                    <ion-icon slot="start" name="another"></ion-icon>
                    <ion-label>
                      Another Page
                    </ion-label>
                  </ion-item>
                </Link>
              </ion-list>
            </ion-content>
          </div>
        </ion-menu>

        <div className="ion-page" main="true">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-toggle>
                  <ion-button>
                    <ion-icon slot="icon-only" name="menu"></ion-icon>
                  </ion-button>
                </ion-menu-toggle>
              </ion-buttons>
              <ion-title>Header</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            {this.props.content}
          </ion-content>
        </div>
      </Fragment>
  }
}

export default withRouter(Menu)