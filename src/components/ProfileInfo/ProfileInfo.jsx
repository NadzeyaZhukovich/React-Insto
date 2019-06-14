import './ProfileInfo.scss';

import React, { Component } from 'react';

import { ProfilePhoto } from './../ProfilePhoto';
import { ProfileSettings } from './../ProfileSettings';

import { userInfo } from './../../userInfo';

export class ProfileInfo extends Component {
    render() {
        return (
            <div className="profile">
                <ProfilePhoto photo={userInfo.photo} />
                <ProfileSettings nickname={userInfo.nickname}/>
            </div>
        )
    }
}