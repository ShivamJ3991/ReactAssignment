import React from "react";
import '../index.css';
import axios from 'axios';
import Config from "../config";
import Header from './Header';



class PlanetDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            planetDetail: {}
        }
        this.getProductDetail(this.props.match.params["Id"])
    }

    getProductDetail = async (id) => {
        let apiURL = Config.authenticateBaseUrl + Config.planetDetailUrl;
        const resp = await axios.get(apiURL + id + "/");
        this.setState({ planetDetail: resp.data});
    }

    render() {
        const { planetDetail } = this.state;
        return (
            <div>
                <Header />
                <div className="container">
                    <div>
                        <h3>{planetDetail.name}</h3>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="rotation_period" className="text-info searchLabel">Rotation Period:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.rotation_period}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="surface_water" className="text-info searchLabel">Surface Water:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.surface_water}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="orbital_period" className="text-info searchLabel">Orbital Period:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.orbital_period}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="gravity" className="text-info searchLabel">Gravity:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.gravity}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="diameter" className="text-info searchLabel">Diameter:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.diameter}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="climate" className="text-info searchLabel">Climate:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.climate}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="terrain" className="text-info searchLabel">Terrain:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.terrain}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 col-md-2" >
                                <label htmlFor="population" className="text-info searchLabel">Population:</label>
                            </div>
                            <div className="col-lg-6 col-md-6" >
                                <input type="text" className="form-control" readOnly value={planetDetail.population}/>
                            </div>
                        </div>
                    </form>
                    </div>    
            </div>
        )
    }
}


export default PlanetDetail;