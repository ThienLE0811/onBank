import React, { useEffect, useState } from "react";
import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    Row,
    Button,
    Col,
    Card,
    Swiper,
    SwiperSlide,
    Icon,
    f7
  } from "framework7-react";

  import config from "../js/config";


const CardCenter = (props)=>{

    return (  
            (config.cards.map((card,index)=>(
                (card.id === props.idCard) && 
                (<div className= {` center-link-a`} key={index} 
                style={{
                    backgroundColor: props.backgroundColor,
                    color: props.color,
                    boxShadow: card.boxShadow,
                    cursor: 'pointer'
                }}
                >
                    <p >{card.title}</p>
                    <Icon f7={`${card.icon}`}  style={{alignSelf: 'flex-end',color: props.colorIcon}}/> 
                </div>)

            )))

        
        // </a>
    )
}

export default CardCenter;