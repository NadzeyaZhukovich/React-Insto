import './ProfilePhoto.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfilePhoto extends Component {
    render() {
        const { photo } = this.props;
        return (
            <div className="profile-image">
                <img src={photo} alt=""/>
            </div>
        )
    }
}

ProfilePhoto.propTypes = {
    photo: PropTypes.string,
}