import './ProfilePhoto.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ProfilePhoto.PropTypes = {
    photo: PropTypes.string,
}