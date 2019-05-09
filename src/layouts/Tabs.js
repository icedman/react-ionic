import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

  tabClicked(t) {
    console.log(t)
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
        <div className="ion-page">
          <ion-content>
            {this.props.content}
          </ion-content>
        </div>

        <ion-tab tab="home" style={{display:'none'}}></ion-tab>
        <ion-tab tab="settings" style={{display:'none'}}></ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" onClick={()=>{this.tabClicked('/tab1')}}>
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
            <ion-badge>6</ion-badge>
          </ion-tab-button>

          <ion-tab-button tab="settings" onClick={()=>{this.tabClicked('/tab2')}}>
            <ion-label>Settings</ion-label>
            <ion-icon name="globe"></ion-icon>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
      </Fragment>
  }
}
