import React from 'react';
import './topbar.css';
import { Person, Search, Chat, Notifications } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">DeissyGarcia</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='serchIcons' />
                        <input placeholder='Search for friend, post or video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">
                        < Person />
                        <span className="topbarBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                        < Chat />
                        <span className="topbarBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                        < Notifications />
                        <span className="topbarBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
