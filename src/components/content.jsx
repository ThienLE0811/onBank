import React from "react";
import config from "../js/config";

import {
    Swiper,
    SwiperSlide,
    Icon
} from "framework7-react";


const Content = () => {

    return (
        <div id="content"> 
        <Swiper pagination autoplay={{ delay: 3000 }}>
        {config.contents.map((content,index)=>(
            <SwiperSlide className="content-slide" key={index}>
                <img
                    src={content.url}
                    key = {content.id}
                    style={{height: '42px', width: '42px'}}
                />
                <div className="content-slide-h">{content.title}</div>
                {
                  typeof(content.description ) === 'string' 
                  && (<div dangerouslySetInnerHTML={{__html:`${content.description}`}}/>) 
                }
    
                {
                    Array.isArray(content.description) 
                        && (
                            <div  style={{display: 'flex'}} >                           
                                <div style={{width: '50%', textAlign: 'left', color: 'rgb(128, 128, 128)'}}>
                                {content.description.map((content, index)=>(
                                    <p key={index}>
                                        {content.icon}
                                        {content.title}
                                    </p>
                                    ))}
                                </div>
                            <div style={{width: '50%', textAlign: 'right', color: 'rgb(4, 164, 104)', fontWeight: '600'}}>
                            {content.description.map((content, index)=>(
                                <p key={index}>{content.value}</p>
                                ))}
                            </div>
                            </div>   
                        )
                }


            </SwiperSlide>
        ))} 
        </Swiper> 
        </div> 
        
    )
}
export default Content;

