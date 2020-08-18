import React, { Component } from 'react';
import Footer from './Footer/Footer';

import './App.css';
import DisplayRows from './DisplayRows/DisplayRows';
import Header from './Header/Header'
class App extends Component {
  state = {
    data: [
      {
        adName: "adName 1",
        roll: "1",
        emailid: "example@example.com"
      },
      {
        adName: "adName 2",
        roll: "2",
        emailid: "example@example.com"
      },
      {
        adName: "adName 3",
        roll: "3",
        emailid: "example@example.com"
      },
      {
        adName: "adName 4",
        roll: "4",
        emailid: "example@example.com"
      },
      {
        adName: "adName 5",
        roll: "5",
        emailid: "example@example.com"
      },
      {
        adName: "adName 6",
        roll: "6",
        emailid: "example@example.com"
      },
      {
        adName: "adName 7",
        roll: "7",
        emailid: "example@example.com"
      },
      {
        adName: "adName 8",
        roll: "8",
        emailid: "example@example.com"
      },
      {
        adName: "adName 9",
        roll: "9",
        emailid: "example@example.com"
      },
      {
        adName: "adName 10",
        roll: "10",
        emailid: "example@example.com"
      },
      {
        adName: "adName 11",
        roll: "11",
        emailid: "example@example.com"
      },
      {
        adName: "adName 12",
        roll: "12",
        emailid: "example@example.com"
      },
      {
        adName: "adName 13",
        roll: "13",
        emailid: "example@example.com"
      },
      {
        adName: "adName 14",
        roll: "14",
        emailid: "example@example.com"
      },
      {
        adName: "adName 15",
        roll: "15",
        emailid: "example@example.com"
      },
      {
        adName: "adName 16",
        roll: "16",
        emailid: "example@example.com"
      },
      {
        adName: "adName 17",
        roll: "17",
        emailid: "example@example.com"
      },
      {
        adName: "adName 18",
        roll: "18",
        emailid: "example@example.com"
      },
      {
        adName: "adName 19",
        roll: "19",
        emailid: "example@example.com"
      },
      {
        adName: "adName 20",
        roll: "20",
        emailid: "example@example.com"
      },
      {
        adName: "adName 21",
        roll: "21",
        emailid: "example@example.com"
      },
      {
        adName: "adName 22",
        roll: "22",
        emailid: "example@example.com"
      },
      {
        adName: "adName 23",
        roll: "23",
        emailid: "example@example.com"
      },
      {
        adName: "adName 24",
        roll: "24",
        emailid: "example@example.com"
      },
      {
        adName: "adName 25",
        roll: "25",
        emailid: "example@example.com"
      },
      {
        adName: "adName 26",
        roll: "26",
        emailid: "example@example.com"
      },
      {
        adName: "adName 27",
        roll: "27",
        emailid: "example@example.com"
      },
      {
        adName: "adName 28",
        roll: "28",
        emailid: "example@example.com"
      },
      {
        adName: "adName 29",
        roll: "29",
        emailid: "example@example.com"
      },
      {
        adName: "adName 30",
        roll: "30",
        emailid: "example@example.com"
      },
      {
        adName: "adName 31",
        roll: "31",
        emailid: "example@example.com"
      },
      {
        adName: "adName 32",
        roll: "32",
        emailid: "example@example.com"
      },
      {
        adName: "adName 33",
        roll: "33",
        emailid: "example@example.com"
      },
      {
        adName: "adName 34",
        roll: "34",
        emailid: "example@example.com"
      },
      {
        adName: "adName 35",
        roll: "37",
        emailid: "example@example.com"
      },
      {
        adName: "adName 37",
        roll: "38",
        emailid: "example@example.com"
      },
      {
        adName: "adName 38",
        roll: "39",
        emailid: "example@example.com"
      },
      {
        adName: "adName 39",
        roll: "40",
        emailid: "example@example.com"
      },
      {
        adName: "adName 40",
        roll: "41",
        emailid: "example@example.com"
      },
      {
        adName: "adName 41",
        roll: "41",
        emailid: "example@example.com"
      },
      {
        adName: "adName 42",
        roll: "42",
        emailid: "example@example.com"
      },
      {
        adName: "adName 43",
        roll: "43",
        emailid: "example@example.com"
      },

    ],
    pagesize: 5,
    currentpage: 1

  };

  navigatefirst = () => {
    this.setState({


      ...this.state,
      currentpage: 1
    })
  }


  navigateprev = () => {
    let newcurrentpage = this.state.currentpage - 1;
    if (this.state.currentpage === 1) {
      newcurrentpage = this.state.currentpage;
    }
    this.setState({
      currentpage: newcurrentpage
    })

  }


  navigatenext = () => {
    let newcurrentpage = this.state.currentpage + 1;
    let lastPage = Math.ceil(this.state.data.length / this.state.pagesize);
    if (this.state.currentpage === lastPage) {
      newcurrentpage = this.state.currentpage;
    }
    this.setState({
      currentpage: newcurrentpage
    })

  }

  navigatelast = () => {
    let newcurrentpage = Math.ceil(this.state.data.length / this.state.pagesize);
    this.setState({
      currentpage: newcurrentpage
    })
  }

  handlepagesize = (event) => {

    let newpagesize = parseInt(event.target.value);

    let lastPage = Math.ceil(this.state.data.length / newpagesize);
    let newcurrentpage = this.state.currentpage;

    if (this.state.currentpage > lastPage) {
      newcurrentpage = lastPage
    }
    this.setState({
      pagesize: newpagesize,
      currentpage: newcurrentpage
    })

  }


  render() {
    return (
      <div className='App'>
        <table className="table">
          <thead>
            <Header></Header>
          </thead>
          <tbody>
            <DisplayRows record={this.state} />

          </tbody>
          <tfoot>
            <div >
              <Footer currentpage={this.state.currentpage}
                navigatefirst={this.navigatefirst}
                navigateprev={this.navigateprev}
                navigatenext={this.navigatenext}
                navigatelast={this.navigatelast}
                handlepagesize={this.handlepagesize}
                lastPage={Math.ceil(this.state.data.length / this.state.pagesize)} />
            </div>
          </tfoot>
</table>

        </div>
    
    )
  }
}

export default App;
