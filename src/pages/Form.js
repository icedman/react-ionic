import React, { Component, Fragment } from 'react';

export default class FormPage extends Component {
  render () {
    let { searched, toggled, checkboxed, dated, texted, radioed, ranged, selected } = {};
    return <Fragment>
      <div>
        <ion-list>
          <ion-item>
            <ion-label fixed></ion-label>
          </ion-item>
          <ion-item>
            <ion-label fixed>App Layout</ion-label>
          </ion-item>
          <ion-item>
            <ion-button onClick="setLayout('Full')">Full</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="setLayout('Header')">Header</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="setLayout('Menu')">Menu</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="setLayout('Tabs')">Tabs</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="setLayout('SplitPane')">SplitPane</ion-button>
          </ion-item>
          <ion-item>
            <ion-label fixed>Sample Controllers</ion-label>
          </ion-item>
          <ion-item>
            <ion-button onClick="sampleAlert()">Alert</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="sampleActionSheet()">ActionSheet</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick="sampleToast()">Toast</ion-button>
          </ion-item>
        </ion-list>
        <ion-searchbar
          value="searched"
          onIonChange="searched = $event.target.value"
          debounce="500"
        ></ion-searchbar>
        searching for { searched }...
        <ion-list>
          <ion-item>
            <ion-icon name="logo-twitter"></ion-icon>
            Followers
            <ion-badge>260k</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label fixed>Input Text</ion-label>
            <ion-input
              type="text"
              value="msg"
              onIonChange="msg = $event.target.value"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Toggle [{ toggled }]</ion-label>
            <ion-toggle
              checked="toggled"
              onIonChange="toggled = $event.target.checked ? true : false"
            ></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Checkbox [{ checkboxed }]</ion-label>
            <ion-checkbox
              color="dark"
              checked="checkboxed"
              onIonChange="checkboxed = $event.target.checked ? true : false"
            ></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label>Date/Time { dated }</ion-label>
            <ion-datetime
              displayFormat="h:mm A"
              pickerFormat="h mm A"
              value="dated"
              onIonChange="dated = $event.target.value"
            ></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-textarea
              v-ion-model="texted"
              placeholder="Enter more information here..."
            ></ion-textarea>
          </ion-item>
          <ion-item>
            { texted }
          </ion-item>
        </ion-list>
        <ion-card>
          <ion-card-header>
            Card Header
          </ion-card-header>
          <ion-card-content>
            Card content
          </ion-card-content>
        </ion-card>
        <ion-radio-group
          value="radioed"
          onIonChange="radioed = $event.target.value"
        >
          <ion-list-header> Radio Group [{ radioed }] </ion-list-header>
          <ion-item>
            <ion-label>Go</ion-label>
            <ion-radio value="go"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Rust</ion-label>
            <ion-radio value="rust"></ion-radio>
          </ion-item>
          <ion-item disabled="true">
            <ion-label>Python</ion-label>
            <ion-radio value="python"></ion-radio>
          </ion-item>
        </ion-radio-group>
        <ion-item>
          <ion-label>Range [{ ranged }]</ion-label>
          <ion-range value="ranged" onIonChange="ranged = $event.target.value">
            <ion-icon size="small" name="sunny" slot="start"></ion-icon>
            <ion-icon name="sunny" slot="end"></ion-icon>
          </ion-range>
        </ion-item>
        <ion-list>
          <ion-item>
            <ion-label>Gaming [{ selected }]</ion-label>
            <ion-select
              value="selected"
              onIonChange="selected = $event.target.value"
            >
              <ion-select-option value="nes">NES</ion-select-option>
              <ion-select-option value="n64">Nintendo64</ion-select-option>
              <ion-select-option value="ps">PlayStation</ion-select-option>
              <ion-select-option value="genesis">Sega Genesis</ion-select-option>
              <ion-select-option value="saturn">Sega Saturn</ion-select-option>
              <ion-select-option value="snes">SNES</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        <ion-slides pager="true">
          <ion-slide style={{"background-color": "green"}}>
            <h2>Slide 1</h2>
          </ion-slide>
          <ion-slide style={{"background-color": "blue"}}>
            <h2>Slide 2</h2>
          </ion-slide>
          <ion-slide style={{"background-color": "red"}}>
            <h2>Slide 3</h2>
          </ion-slide>
        </ion-slides>
        <ion-list>
          <ion-item-sliding>
            <ion-item>
              <ion-label fixed>Slide me to the left</ion-label>
            </ion-item>
            <ion-item-options>
              <ion-item-option onClick="option1($event)" color="green"
                >Option 1</ion-item-option>
              <ion-item-option>Option 2</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
      </div>
    </Fragment>
  }
}