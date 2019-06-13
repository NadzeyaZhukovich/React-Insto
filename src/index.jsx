import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { Likes } from './components/Likes';
import { Comments } from './components/Comments';



class App extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Gallery/>
                </div>
            </main>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));