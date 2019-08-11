import React from 'react';
import { Progress } from 'reactstrap';

class PlanetPopulation extends React.Component {

    render() {
        const { planetDetail } = this.props;
        let progresscolor = "Initial"

        if(planetDetail.population < "100000000")
        {
            progresscolor = "Initial"
        }
        else if(planetDetail.population > "100000000" && planetDetail.population < "1000000000")
        {
            progresscolor = "success"
        }
        else if(planetDetail.population > "1000000000" && planetDetail.population < "10000000000")
        {
            progresscolor = "info"
        }
        else if(planetDetail.population > "10000000000" && planetDetail.population < "100000000000")
        {
            progresscolor = "warning"
        }
        else if(planetDetail.population > "100000000000")
        { 
            progresscolor = "danger"
        }

        let splitUrl = planetDetail.url.split('/');
        let planetId = splitUrl.length && splitUrl[splitUrl.length - 2];
        let planetUrl = "/planet-detail/" + planetId;

        return(

            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <a href={planetUrl} ><h4>{planetDetail.name}</h4></a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <a href={planetUrl} >  <Progress color={progresscolor} value={planetDetail.population}>{planetDetail.population}</Progress></a>
                    </div>
            </div>
        )
    }
}

export default PlanetPopulation;