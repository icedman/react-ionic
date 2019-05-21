import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

/*
Wrap ion-components as React Component to attach event listeners
*/
class withIonChange extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.ionChange) {
      this.componentRef.current.addEventListener('ionChange', this.props.ionChange);
    }
  }

  componentWillUnmount() {
    if (this.props.ionChange) {
      this.componentRef.current.removeEventListener('ionChange', this.props.ionChange);
    } 
  }

  render () {
    const IonComponent = this.component
    return <IonComponent ref={this.componentRef} {...this.props}/>
  }
}

/*
"At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies."
*/
class IonCheckbox extends withIonChange { component = 'ion-checkbox' }
class IonToggle extends withIonChange { component = 'ion-toggle' }
class IonInput extends withIonChange { component = 'ion-input' }
class IonTextarea extends withIonChange { component = 'ion-textarea' }
class IonRadioGroup extends withIonChange { component = 'ion-radio-group' }
class IonRange extends withIonChange { component = 'ion-range' }
class IonSelect extends withIonChange { component = 'ion-select' }
class IonSearchBar extends withIonChange { component = 'ion-searchbar' }

/* add eventlistener at render */
function withEventListener(elm, handler) {
  if (elm) {
    elm.addEventListener('ionChange', handler)
  }
  return elm;
}

class FormPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searched: null,
      toggled: true,
      checkboxed: true,
      dated: null,
      msg: 'hello',
      texted: null,
      radioed: 'go',
      ranged: 50,
      selected: 'snes'
    }
  }

  componentDidMount () {

    this.$ionic = {
      alert: document.querySelector("ion-alert-controller"),
      actionSheet: document.querySelector("ion-action-sheet-controller"),
      toast: document.querySelector("ion-toast-controller")
    }

    // manually attach event listeners
    let toggles = document.querySelectorAll('ion-toggle, ion-checkbox')
    Array.prototype.forEach.call(toggles, (toggle) => {
      if (toggle.classList.contains('skipListener')) {
        console.log('.skip...');
        return;
      }
      toggle.addEventListener('ionChange', (evt) => {
        let state = {}
        state[evt.target.name || evt.target.attributes.name.value] = evt.target.checked
        this.setState(state);
      })
    })

    let inputs = document.querySelectorAll('ion-input, ion-textarea, ion-datetime, ion-radio-group, ion-range, ion-select, ion-searchbar')
    Array.prototype.forEach.call(inputs, (input) => {
      if (input.classList.contains('skipListener')) {
        console.log('.skip...');
        return;
      }
      input.addEventListener('ionChange', (evt) => {
        let state = {}
        state[evt.target.name || evt.target.attributes.name.value] = evt.target.value
        this.setState(state);
      })
    })

  }

  fullLayout () {
    this.props.history.push('/full');
  }

  headerLayout () {
    this.props.history.push('/header');
  }

  splitLayout () {
    this.props.history.push('/split');
  }

  tabsLayout () {
    this.props.history.push('/tabs');
  }

  menuLayout () {
    this.props.history.push('/menu');
  }

  async sampleAlert() {
    await this.$ionic.alert.componentOnReady();
    this.$ionic.alert
      .create({
        header: "Alert",
        subHeader: "Subtitle",
        message: "This is an alert message.",
        buttons: ["OK"]
      })
      .then(a => {
        a.present();
      });
  }

  async sampleActionSheet() {
    await this.$ionic.actionSheet.componentOnReady();
    this.$ionic.actionSheet
      .create({
        header: "Albums",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: "trash",
            handler: () => {
              console.log("Delete clicked");
            }
          },
          {
            text: "Share",
            icon: "share",
            handler: () => {
              console.log("Share clicked");
            }
          },
          {
            text: "Play (open modal)",
            icon: "arrow-dropright-circle",
            handler: () => {
              console.log("Play clicked");
            }
          },
          {
            text: "Favorite",
            icon: "heart",
            handler: () => {
              console.log("Favorite clicked");
            }
          },
          {
            text: "Cancel",
            icon: "close",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]
      })
      .then(a => {
        a.present();
      });
  }

  async sampleToast() {
    await this.$ionic.toast.componentOnReady();
    this.$ionic.toast
      .create({
        message: "Click to Close",
        showCloseButton: true,
        position: "top",
        closeButtonText: "Done"
      })
      .then(a => {
        a.present();
      });
  }

  render () {
    let { searched, toggled, checkboxed, dated, msg, texted, radioed, ranged, selected } = this.state;
    return <Fragment>
      <div>
        <ion-list>
          <ion-item>
            <ion-label fixed>App Layout</ion-label>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.fullLayout()}}>Full</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.headerLayout()}}>Header</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.menuLayout()}}>Menu</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.tabsLayout()}}>Tabs</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.splitLayout()}}>SplitPane</ion-button>
          </ion-item>
          <ion-item>
            <ion-label fixed>Sample Controllers</ion-label>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.sampleAlert()}}>Alert</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.sampleActionSheet()}}>ActionSheet</ion-button>
          </ion-item>
          <ion-item>
            <ion-button onClick={()=>{this.sampleToast()}}>Toast</ion-button>
          </ion-item>
        </ion-list>
        <ion-searchbar
          value={searched}
          name="searched"
          debounce={500}
        ></ion-searchbar>
        <ion-list>
          <ion-item>searching for { searched }...</ion-item>
          <ion-item>
            <ion-icon name="logo-twitter"></ion-icon>
            Followers
            <ion-badge>260k</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label fixed>Input Text [{ this.state.msg }]</ion-label>
            <ion-input
              type="text"
              value={msg}
              name="msg"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Toggle [{toggled ? 'true' : 'false'}]</ion-label>
            <ion-toggle
              className='skipListener'
              checked={toggled}
              name="toggled"

              /*
              hacky way of adding an event listener.
              removeEventListener is **probably** not need,
              ionic will take care of freeing the reference when it is unmounted??
              */
              _ref={(elm)=>{ return withEventListener(elm,
                  (evt)=>{this.setState({toggled:evt.target.checked})}
              )}}

              /*
              another hacky way of adding an event listener, similar to above
              */
              ref={(elm)=>{ if (elm) {
                elm.addEventListener('ionChange', (evt)=>{
                  this.setState({toggled:evt.target.checked})})
              }; return elm; }}

            ></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Toggle [{toggled ? 'true' : 'false'}]</ion-label>
            <IonToggle
              className='skipListener'
              checked={toggled}
              ionChange={(evt)=>{this.setState({toggled:evt.target.checked})}}
              name="toggled"
            ></IonToggle>
          </ion-item>

          {toggled &&
          <ion-item>
            <ion-label>Checkbox [{checkboxed ? 'true' : 'false'}] .. show this when toggle on</ion-label>
            <IonCheckbox
              className='skipListener'
              color="dark"
              checked={checkboxed}
              ionChange={(evt)=>{this.setState({checkboxed:evt.target.checked})}}
              name="checkboxed"
            ></IonCheckbox>
          </ion-item>
          }

          <ion-item>
            <ion-label>Checkbox [{checkboxed ? 'true' : 'false'}]</ion-label>
            <ion-checkbox
              color="dark"
              checked={checkboxed}
              name="checkboxed"
              on-ionChange="alert(123)"
            ></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label>Checkbox [{checkboxed ? 'true' : 'false'}]</ion-label>
            <IonCheckbox
              color="dark"
              checked={checkboxed}
              ionChange={(evt)=>{this.setState({checkboxed:evt.target.checked})}}
              name="checkboxed"
            ></IonCheckbox>
          </ion-item>
          <ion-item>
            <ion-label>Date/Time [{ this.state.dated }]</ion-label>
            <ion-datetime
              displayFormat="h:mm A"
              pickerFormat="h mm A"
              value={dated}
              name="dated"
            ></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-textarea
              value={texted}
              name="texted"
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
          value={radioed}
          name="radioed"
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
          <ion-range value={ranged}
            name="ranged"
            >
            <ion-icon size="small" name="sunny" slot="start"></ion-icon>
            <ion-icon name="sunny" slot="end"></ion-icon>
          </ion-range>
        </ion-item>
        <ion-list>
          <ion-item>
            <ion-label>Gaming [{ selected }]</ion-label>
            <ion-select
              value={selected}
              name="selected"
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
          <ion-slide style={{"backgroundColor": "green"}}>
            <h2>Slide 1</h2>
          </ion-slide>
          <ion-slide style={{"backgroundColor": "blue"}}>
            <h2>Slide 2</h2>
          </ion-slide>
          <ion-slide style={{"backgroundColor": "red"}}>
            <h2>Slide 3</h2>
          </ion-slide>
        </ion-slides>
        <ion-list>
          <ion-item-sliding>
            <ion-item>
              <ion-label fixed>Slide me to the left</ion-label>
            </ion-item>
            <ion-item-options>
              <ion-item-option onClick={(event)=>{}} color="green"
                >Option 1</ion-item-option>
              <ion-item-option>Option 2</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>

          <ion-item>
            <ion-label fixed>
            <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </Fragment>
  }
}

export default withRouter(FormPage);