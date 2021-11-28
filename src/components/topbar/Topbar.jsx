import React, { useContext } from 'react';
import './topbar.css';
import { Person, Search, Chat, Notifications } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContex';

export default function Topbar() {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to='/' style={{textDecoration:'none'}}>
                <span className="logo">DeissyGarcia</span>
                </Link>
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
                <Link to={`/profile/${user.username}`} >
                <img 
                src={
                    user.profilePicture 
                    ? PF + user.profilePicture 
                    : PF + 'person/noAvatar.png'
                    } 
                    alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}
