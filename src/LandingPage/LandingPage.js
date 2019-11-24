import React,{ Component } from "react";
import "./landingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass= this.addActiveClass.bind(this);
   
    this.state = {
        active: false,
        queries:[
          {
            "id":1,
            "name":"Query 1"
          },
          {
            "id":2,
            "name":"Query 2"
          },
          {
            "id":3,
            "name":"Query 3"
          },
          {
            "id":4,
            "name":"Query 4"
          },
          {
            "id":5,
            "name":"Query 5"
          },
          {
            "id":6,
            "name":"Query 6"
          },
          {
            "id":7,
            "name":"Query 7"
          },
          {
            "id":8,
            "name":"Query 8"
          },
          {
            "id":9,
            "name":"Query 9"
          },
          {
            "id":10,
            "name":"Query 10"
          },
        ]
    };
  }
  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  render() {
    return (
      <div>
        <div>
          <p className="query-statement">Select * from employee;</p>
        </div>
        <div className="queriesTab">
          <ul>
          {
            this.items = this.state.queries.map((item, index) =>
              <li 
                className={this.state.active && item.id === (index + 1 ) ? 'active': ''} 
                onClick={this.toggleClass.bind(this)}  
                key={item.id}>
                  {item.name}
              </li>
            )
          }
          </ul>
        </div>      
        
      </div>
    )
  }
}

export default LandingPage;