import React,{ Component } from "react";
import { css } from '@emotion/core';
import Button from '@material-ui/core/Button';
import BeatLoader from 'react-spinners/BeatLoader';
import "./landingPage.css";

const override = css`
    display: block;
    margin: 2 auto;
    border-color: white;
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass= this.addActiveClass.bind(this);
   
    this.state = {
        showSelectedTabDetails: {
          "id":"query1",
          "name":"Query 1",
          "className":"query-label",
          "shortDescription": "Get All the employee details of an organization with query 1",
        },
        queries:[
          {
            "id":"query1",
            "className":"query-label",
            "name":"Query 1",
            "shortDescription": "Get All the employee details of an organization with query 1",
          },
          {
            "id":"query2",
            "className":"query-label",
            "name":"Query 2",
            "shortDescription": "Get All the employee details of an organization with query 2"
          },
          {
            "id":"query3",
            "className":"query-label",
            "name":"Query 3",
            "shortDescription": "Get All the employee details of an organization with query 3"
          },
          {
            "id":"query4",
            "className":"query-label",
            "name":"Query 4",
            "shortDescription": "Get All the employee details of an organization with query 4"
          },
          {
            "id":"query5",
            "className":"query-label",
            "name":"Query 5",
            "shortDescription": "Get All the employee details of an organization with query 5"
          },
          {
            "id":"query6",
            "className":"query-label",
            "name":"Query 6",
            "shortDescription": "Get All the employee details of an organization with query 6"
          },
          {
            "id":"query7",
            "className":"query-label",
            "name":"Query 7",
            "shortDescription": "Get All the employee details of an organization with query 7"
          },
          {
            "id":"query8",
            "className":"query-label",
            "name":"Query 8",
            "shortDescription": "Get All the employee details of an organization with query 8"
          },
          {
            "id":"query9",
            "className":"query-label",
            "name":"Query 9",
            "shortDescription": "Get All the employee details of an organization with query 9"
          },
          {
            "id":"query10",
            "className":"query-label",
            "name":"Query 10",
            "shortDescription": "Get All the employee details of an organization with query 10"
          },
        ],
        parentHoldingQueryData:[],
        loading: ''
    };

    this.getApiData = this.getApiData.bind(this);
    this.selectedTab = this.selectedTab.bind(this);
  }
  
  selectedTab(e, item) {
    console.log(`selected ${JSON.stringify(item)}`);
    let selectedTabDetails = this.state.queries;
    selectedTabDetails.forEach(function (obj) {
      if(obj.id === item.id) {
        obj.className = "query-label active";
      }else{
        obj.className = "query-label";
      }
      })
    this.setState(prevState => ({
      showSelectedTabDetails: {                   // object that we want to update
          ...prevState.showSelectedTabDetails,    // keep all other key-value pairs
          name: item.name,
          id: item.id,
          shortDescription: item.shortDescription       // update the value of specific key
      },
      queries:selectedTabDetails
      
  }))
  };
  
  getApiData(e, id) {    
    this.setState({loading: true});
    // make asynchronous call
    console.log(`you are about to query the ${id} statement.`);
    fetch(`http://localhost:8080/${id}`) // take the ID and fetch the respective url
    .then(res => res.json())
    .then((data) => {
      setTimeout(() => {
        this.setState({loading: false});
        this.props.sendData(data);
      }, 500);
      
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
                className={item.className} 
                onClick={((e) => this.selectedTab(e, item))}
                key={item.id}> 
                {item.name}                
              </label>
            )
          } 
          {/* if you have selected any query then assosiated short description would show up */}
          { this.state.showSelectedTabDetails &&
          <p className="description-text">
            {this.state.showSelectedTabDetails.shortDescription}
            <Button 
              variant="contained" 
              color="primary"
              size="large"              
              onClick={((e) => this.getApiData(e, this.state.showSelectedTabDetails.id))} 
              >
              <BeatLoader
                css={override}
                sizeUnit={"px"}
                size={15}
                color={'#FFFFFF'}
                loading={this.state.loading}
              />
              {this.state.loading ? '' : 'Search'}           
            </Button>           
          </p>
          }       
        </div>
    )
  }
}

export default LandingPage;