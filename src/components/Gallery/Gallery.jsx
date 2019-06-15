import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from './../ImageBox';
import { VideoBox } from './../VideoBox';
import { MultipleImageBox } from './../MultipleImageBox';
import { pictures } from './../../pictures';

export class Gallery extends Component {
    renderContent(picture, idx) {
        if (picture.contentType === 'video'){
            return <VideoBox key={idx} {...picture} />
        } else if (picture.contentType === 'pictures') {
            return <MultipleImageBox key={idx} {...picture} />
        } else {
            return <ImageBox key={idx} {...picture} />
        }
    }

    render() {
        return (
            <div className="gallery">
                {
                    pictures.map((picture, idx) => this.renderContent(picture, idx))
                }
            </div>
        ) 
    }
}