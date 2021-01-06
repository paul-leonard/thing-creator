import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      things: [
        { id: 1, name: "lamp", description: "I love lamp." },
        { id: 2, name: "desk", description: "Good for writing." },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header thingCount={this.state.things.length} />
        <ThingList allTheThings={this.state.things} />
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
      <ul>
        {this.props.allTheThings.map(thing => (
          <ThingItem key={thing.id} nameToList={thing.name} description={thing.description} />
        ))}
      </ul>
    )
  }
}

function ThingItem(props) {
  return <li>{props.nameToList}</li>
}

function Footer() {
  return <h2>Do you know of other things?</h2>
}


export default App;
