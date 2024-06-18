import React, { useState } from 'react'
import './LandingReviews.css'
import Marquee from "react-fast-marquee";
import {CirclePause, CirclePlay, MessageCircleMore} from 'lucide-react';
// import Commenticon from '../../../images/commenticon.png'

function LandingReviews() {
    const [playing, setPlaying] = useState(true);
    const playPause = () => {
        if(playing){
            setPlaying(false);
        }else{
            setPlaying(true);
        }
    }
  return (
    <div className='landing-reviews'>
        <h4>Our Reviews</h4>
        <div className="reviews">
            <div className="review-play-pause-btn">
                {
                    playing &&
                    <CirclePause style={{cursor: "pointer"}} onClick={playPause}/>
                }
                {
                    !playing &&
                    <CirclePlay style={{cursor: "pointer"}} onClick={playPause}/>
                }
            </div>
            <Marquee speed={100} play={playing} className='landing-review-marquee'>
                <div className="review">
                    <div className="review-top-comment-icon">
                        <MessageCircleMore size={50} className='review-top-comment-icon-ico'/>
                        {/* <img src={Commenticon} alt="" /> */}
                    </div>
                    <div className='review-top-comment-main'>
                        <div className="review-user-image">
                            <img src="https://web.archive.org/web/20220618182247im_/https://cuvette.tech/assets/images/StudentTestimonial/tsajeet.png" alt="" />
                        </div>
                        <div className="review-user-about">
                            <div className="review-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit rerum ex neque rem aliquid molestias nemo, illo ad. Natus, dolor.</div>
                            <p>AYUSH ARORA</p>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="review-top-comment-icon">
                        <MessageCircleMore size={50} className='review-top-comment-icon-ico'/>
                        {/* <img src={Commenticon} alt="" style={{width: "10%"}}/> */}
                    </div>
                    <div className='review-top-comment-main'>
                        <div className="review-user-image">
                            <img src="https://web.archive.org/web/20220618182247im_/https://cuvette.tech/assets/images/StudentTestimonial/tsajeet.png" alt="" />
                        </div>
                        <div className="review-user-about">
                            <div className="review-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit rerum ex neque rem aliquid molestias nemo, illo ad. Natus, dolor.</div>
                            <p>AYUSH ARORA</p>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    </div>
  )
}

export default LandingReviews