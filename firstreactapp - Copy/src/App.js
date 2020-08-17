 import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[ {
      name:'Mohit', age:22
    },
    {
      name:'Gunjan', age:21
    },
    {
      name:'Muskan', age:21
    }
  ]
  }
  switchNameHandler = () =>{
// console.log('Was Clicked');   
//Don't do this this.state.persons[0].name="Mohit Sharma";
this.setState({persons: [ {
  name:'Mohit Sharma', age:22
},
{
  name:'Gunjan Ahuja', age:20
},
{
  name:'Muskan', age:21
}
]  })
  }

  render(){
  return (
    <div className="App">
      <h1>I'm Learning React</h1>
      <button onClick={this.switchNameHandler} >Switch Name</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>This is a person</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />  </div>
  );
}
}

export default App;
