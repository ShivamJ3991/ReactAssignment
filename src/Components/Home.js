import React, { Component } from 'react';
import {debounce} from 'lodash';
import axios from 'axios';
import Config from "../config";
import PlanetPopulation from './PlanetPopulation';
import Header from './Header';

class Home extends Component {

    constructor(props) {
        super(props)
    
        let searchPlanetData = [];
        let searchData = localStorage.getItem('searchData')
        if (localStorage.getItem('isLogin') === 'true' && searchData) {
            searchPlanetData = JSON.parse(searchData);
        }
        this.state = {
            searchPlanet : '' ,
            planets: searchPlanetData
        }
    }

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
    this.handleSearch(e.target.value);
}

searchPlanets = async (searchText) =>{
    let apiURL = Config.authenticateBaseUrl + Config.planetSearchUrl;
    let response = await axios.get(apiURL+ searchText);
    if(response && response.data.results.length >0){
        this.setState({ planets : response.data.results });
        localStorage.setItem('searchData',JSON.stringify(response.data.results));
    }
}

handleSearch = debounce(this.searchPlanets, 1000);

    render() {
        return (
            <div>
                <Header />
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
                            this.state.planets.map((planetDetail, index) => <PlanetPopulation key={index} planetDetail={planetDetail} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home