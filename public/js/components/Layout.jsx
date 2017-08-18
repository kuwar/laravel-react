import React from "react";

import Navigation from "./includes/Navigation";

export default class Layout extends React.Component {

    render() {

        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div>

                <Navigation location={location}/>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}