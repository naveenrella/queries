import React,{ Component } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import "./landingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass= this.addActiveClass.bind(this);
   
    this.state = {
        showSelectedTabDetails: {
          "id":"query1",
          "name":"Query 1",
          "shortDescription": "Get All the employee details of an organization",
        },
        queries:[
          {
            "id":"query1",
            "name":"Query 1",
            "shortDescription": "Get All the employee details of an organization",
          },
          {
            "id":"query2",
            "name":"Query 2",
            "shortDescription": "Get All the employee details of an organization with query 2"
          },
          {
            "id":"query3",
            "name":"Query 3",
            "shortDescription": "Get All the employee details of an organization with query 3"
          },
          {
            "id":"query4",
            "name":"Query 4",
            "shortDescription": "Get All the employee details of an organization with query 4"
          },
          {
            "id":"query5",
            "name":"Query 5",
            "shortDescription": "Get All the employee details of an organization with query 5"
          },
          {
            "id":"query6",
            "name":"Query 6",
            "shortDescription": "Get All the employee details of an organization with query 6"
          },
          {
            "id":"query7",
            "name":"Query 7",
            "shortDescription": "Get All the employee details of an organization with query 7"
          },
          {
            "id":"query8",
            "name":"Query 8",
            "shortDescription": "Get All the employee details of an organization with query 8"
          },
          {
            "id":"query9",
            "name":"Query 9",
            "shortDescription": "Get All the employee details of an organization with query 9"
          },
          {
            "id":"query10",
            "name":"Query 10",
            "shortDescription": "Get All the employee details of an organization with query 10"
          },
        ],
        parentHoldingQueryData:[]
    };

    this.getApiData = this.getApiData.bind(this);
    this.selectedTab = this.selectedTab.bind(this);
  }
  
  selectedTab(e, item) {
    console.log(`selected ${JSON.stringify(item)}`);
    this.setState(prevState => ({
      showSelectedTabDetails: {                   // object that we want to update
          ...prevState.showSelectedTabDetails,    // keep all other key-value pairs
          name: item.name,
          id: item.id,
          shortDescription: item.shortDescription       // update the value of specific key
      }
  }))
  };
  
  getApiData(e, id) {    
    console.log(`you are about to query the ${id} statement.`);
    fetch(`http://localhost:8080/${id}`) // take the ID and fetch the respective url
    .then(res => res.json())
    .then((data) => {
      this.props.sendData(data);
    })
    .catch(console.log);    
  }

  sendDataToAppComponent = (landingPageData) => {
    this.setState({ parentHoldingQueryData: landingPageData });
  }

  render() {    
    
    return (

        <div className="short-description">
          {/* Query's tabs here */}
          {
            this.queriesLabels = this.state.queries.map((item, index) =>
              <label 
                className={"query-label"} 
                onClick={((e) => this.selectedTab(e, item))}
                key={item.id}> 
                {item.name}                
              </label>
            )
          } 
          { this.state.showSelectedTabDetails &&
          <p>{this.state.showSelectedTabDetails.shortDescription}</p>
          }


          {/* send id as prop to this button */}
          <Button
              variant="contained"
              color="primary"
              className="send-button"
              onClick={((e) => this.getApiData(e, this.state.showSelectedTabDetails.id))}
            >
              Send
            </Button>                       
        </div>
    )
  }
}

export default LandingPage;