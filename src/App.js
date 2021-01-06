import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      things: [
        { id: 1, name: "lamp", description: "I love lamp." },
        { id: 2, name: "desk", description: "Good for writing." },
        { id: 3, name: "mug", description: "Holds coffee." },
      ]
    }
    this.onCreated = this.onCreated.bind(this);
  }

  onCreated(thing) {
    // update state for things object array
    const things = [...this.state.things, thing]
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header thingCount={this.state.things.length} />
        <ThingList allTheThings={this.state.things} onCreated={this.onCreated} />
        <Footer />
      </div>
    );
  }
}

function Header(props) {
  return (
    <h2>There are {props.thingCount} things we are tracking:</h2>
  )
}

class ThingList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.allTheThings.map(thing => (
            <ThingItem key={thing.id} nameToList={thing.name} description={thing.description} />
          ))}
        </ul>
      {/* TODO: pass along the length to use for the new id */}
      {/* <ThingForm length={ this.props.allTheThings.length } onCreated = { this.props.onCreated } /> */}
      <ThingForm length={ this.props.allTheThings.length } onCreated = { this.props.onCreated } />
      </div>
    )
  }
}

function ThingItem(props) {
  return <li>{props.nameToList}</li>
}

function Footer() {
  return <h2>Do you know of other things?</h2>
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    // let length = this.props.length;
    // TODO: why do I need to do this length thing out here (above)?  Instead of in the next line?
    // this.state = { id: {length}, name: '', description: '' };
    this.state = { name: '', description: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // TODO:  add stuff for description
    // TODO:  add id number at end of length
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    // alert('Thanks for adding this new thing to track:  ' + this.state.name);
    event.preventDefault();
    this.props.onCreated(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Something else to track:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
