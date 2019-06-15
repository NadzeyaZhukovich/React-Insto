import './Icon.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Icon extends Component {
    render() {
        const {icon} = this.props;
        
        return (
            <div className="gallery-item-type">
                { <i className={icon} aria-hidden="true"></i> }

            </div>
        )
    }
}

Icon.propTypes = {
    icon: PropTypes.string,
}