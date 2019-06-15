import './MultipleImageBox';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Comments } from './../Comments';
import { Likes } from './../Likes';
import { Icon } from './../Icon';

export class MultipleImageBox extends Component {
    render() {
        const multipleImageBox = 'fas fa-clone';
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt=""/>
                <Icon icon={multipleImageBox}/>
                <div className="gallery-item-info">
                    <ul>
                        <Likes likes={likes}/>
                        <Comments comments={comments}/>
                    </ul>
                </div>
            </div>
        )
    }
}

MultipleImageBox.propTypes = {
    likes: PropTypes.number,
    comments: PropTypes.number,
    image: PropTypes.string,
}