import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Mohit",
        age: 22,
      },
      {
        name: "Gunjan",
        age: 21,
      },
      {
        name: "Muskan",
        age: 21,
      },
    ],
  };
  switchNameHandler = (NewName) => {
    // console.log('Was Clicked');
    //Don't do this this.state.persons[0].name="Mohit Sharma";
    this.setState({
      persons: [
        {
          name: NewName,
          age: 22,
        },
        {
          name: "Gunjan Ahuja",
          age: 20,
        },
        {
          name: "Muskan",
          age: 21,
        },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Mohit",
          age: 22,
        },
        {
          name: event.target.value,
          age: 21,
        },
        {
          name: "Muskan",
          age: 21,
        },
      ],
    });
  };

  togglePersonHandler =() =>{
    
  }




  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "10px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>I'm Learning React</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Mohit Pandit!!")}
        >
          Switch Name
        </button>

        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            Click={this.switchNameHandler.bind(
              this,
              "Gunjan and Gunjan is Mohit's Best Friend"
            )}
            changed={this.nameChangedHandler}
          >
            This is a person
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      </div>
    );
  }
}

export default App;
