import React, { Component } from 'react';
import {debounce} from 'lodash';
import axios from 'axios';
import Config from "../config";
import PlanetPopulation from './PlanetPopulation';
import Header from './Header';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchPlanet : '' ,
            planets: [],
            hitCount : 1,
            searchTime: new Date().getTime(),
            userName : localStorage.getItem('userName'),
            searchAble : true
        }
    }

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
    this.handleSearch(e.target.value);
}

searchPlanets = async (searchText) =>{
    if(this.state.userName !== "Luke Skywalker")
    {
        let searchCount = this.state.hitCount;
        if(searchCount == 1)
        {
            this.setState({ searchTime : new Date().getTime()});
        }
        let setBlockingTime =  new Date(this.state.searchTime).setMinutes(new Date(this.state.searchTime).getMinutes() + 1);
        if(new Date().getTime() < setBlockingTime  && searchCount >5)
        {
            this.setState({searchAble : false});
        
        }else
        {
            if(new Date().getTime() < setBlockingTime)
            {
                this.setState({hitCount : searchCount + 1,searchAble : true });
            }
            else{
                this.setState({hitCount : 1,searchTime : new Date().getTime(),searchAble : true });
            }
        }
    }
    
    let apiURL = Config.authenticateBaseUrl + Config.planetSearchUrl;
    let response = await axios.get(apiURL+ searchText);
    if(response && response.data.results.length >0){
        this.setState({ planets : response.data.results });
    }
}

handleSearch = debounce(this.searchPlanets, 1000);

    render() {
        return (
            <div>
                {this.state.searchAble }--SS
                <Header history={this.props.history} />
                <div>
                    <form>
                        <div className="row searchSpace searchLabel">
                            <div className="col-lg-1 col-md-1">
                                <label  className="text-info">Search Planet:</label>
                            </div>
                            <div className = " col-lg-5 col-md-5 col-md-pull-4 ">
                                <input placeholder="Enter Planet Name" 
                                    className = "form-control" type="text" 
                                    onChange={this.handleChange} 
                                    value={this.state.searchPlanet}
                                    name="searchPlanet" />
                            </div>
                        </div>
                    </form>
                    <div className ="searchSpace">
                        {
                          this.state.searchAble &&  this.state.planets.map((planetDetail, index) => <PlanetPopulation key={index} planetDetail={planetDetail} />)
                        }
                    </div>
                    <div className ="searchSpace">
                        {
                          !this.state.searchAble &&  <span><h3>Maximum limit to search is exceeded. Kindly wait for minute.</h3></span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)