import './ImageBox.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Comments } from './../Comments';
import { Likes } from './../Likes';

export class ImageBox extends Component {
    render() {
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt=""/>
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

ImageBox.propTypes = {
    likes: PropTypes.number,
    comments: PropTypes.number,
    image: PropTypes.string,
}