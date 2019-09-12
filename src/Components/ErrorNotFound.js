import React, { Component } from 'react';

export default class ErrorNotFound extends Component {

    render() {
        return (
            <div id='error'>
                
                <h1 >Oops! That page can’t be found.</h1>
                <p >
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
                <img src="img/404-page_ipop2d.png" />
            </div>
        );
    }
}