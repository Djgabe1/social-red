import React from 'react'
import './sidebar.css'
import {RssFeed, Chat, Group, PlayCircleFilled, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons'
import {Users} from '../../dummyData'

import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <RssFeed className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Feeds
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <Chat className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Chat
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <PlayCircleFilled className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Videos
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <Group className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Groups
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <Bookmark className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Bookmarks
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Questions
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Jobs
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <Event className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Events
                    </span>
                    </li>
                    <li className="sidebarListItem">
                    <School className='sidebarIcons'/>
                    <span className="sidebarItemText">
                        Courses
                    </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u} />
                        ))}
                </ul>
            </div>
        </div>
    )
}
