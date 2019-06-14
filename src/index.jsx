import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { ProfileInfo } from './components/ProfileInfo';
import { Gallery } from './components/Gallery';

class App extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <ProfileInfo/>
                </div>
                <div className="container">
                    <Gallery/>
                </div>
            </main>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));