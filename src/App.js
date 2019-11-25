import React,{ Component } from "react";
import './App.css';
import LandingPage from  "./LandingPage/LandingPage.js";
import Queries from './queries/queries.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentHoldingQueryData: null,
      childData:null
    };
    this.getData = this.getData.bind(this);
  }

  getData(data){
    this.setState({childData: data});     
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LandingPage sendData={this.getData} />
          <Queries dataFromLandingPage = {this.state.childData} />
        </header>
      </div>
    );
  }
}

export default App;
