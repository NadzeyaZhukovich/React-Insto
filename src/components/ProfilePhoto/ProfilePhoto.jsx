import './ProfilePhoto.scss';

import React, { Component } from 'react';

export class ProfilePhoto extends Component {
    render() {
        const { photo } = this.props;
        {console.log("Photo: " + photo);}
        return (
            <div className="profile-image">
                <img src={photo} alt=""/>
            </div>
        )
    }
}