import './VideoBox.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Comments } from './../Comments';
import { Likes } from './../Likes';
import { Icon } from './../Icon';

export class VideoBox extends Component {
    render() {
        const videoIcon = 'fas fa-video';
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt=""/>
                <Icon icon={videoIcon}/>
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

VideoBox.propTypes = {
    likes: PropTypes.number,
    comments: PropTypes.number,
    image: PropTypes.string,
}