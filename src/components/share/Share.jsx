import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind Safak?" className='shareInput'/>
                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='red' className='shareIcons' />
                            <span className='shareOptionText' >Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='green' className='shareIcons' />
                            <span className='shareOptionText' >Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='blue' className='shareIcons' />
                            <span className='shareOptionText' >Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcons' />
                            <span className='shareOptionText' >Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
