import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Tabs extends Component {

  tabClicked(t) {
    this.props.history.push(t);
  }

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

      <ion-tabs>
        <div className="ion-page" style={{marginTop: '60px'}}>
          <ion-content>
            {this.props.content}
          </ion-content>
        </div>

        <ion-tab tab="home" style={{display:'none'}}></ion-tab>
        <ion-tab tab="settings" style={{display:'none'}}></ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" onClick={()=>{this.tabClicked('/routes')}}>
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
            <ion-badge>6</ion-badge>
          </ion-tab-button>

          <ion-tab-button tab="settings" onClick={()=>{this.tabClicked('/form')}}>
            <ion-label>Settings</ion-label>
            <ion-icon name="globe"></ion-icon>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
      </Fragment>
  }
}

export default withRouter(Tabs)