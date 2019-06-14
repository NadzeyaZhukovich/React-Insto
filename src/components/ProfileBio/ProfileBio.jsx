import './ProfileBio.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileBio extends Component {
    render() {
        const { name, status} = this.props;
        return (
            <div className="profile-bio">
                <p><span className="profile-real-name">{name}</span> {status}</p>
            </div>
        )
    }
}

ProfileBio.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
}