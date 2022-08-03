import React, { useState } from "react";
import {
    ListItem,
    AccordionContent,
    List,
    BlockTitle,
    Block
  } from "framework7-react";

import config from "../js/config";


const AccordionList = ()=>{
    return (
        <>
        <BlockTitle style={{color: 'rgb(4, 164, 104)'}}>Câu hỏi thường gặp</BlockTitle>
        {config.accordionLists.map((value,index)=>(
            <List accordionList accordionOpposite key={index} style={{margin: '0'}}>
                <ListItem accordionItem title={`${value.title}`} style={{fontSize:'14px'}}>
                <AccordionContent>
                    <Block>
                        <p style={{padding: '5px'}}>{value.text}</p>
                    </Block>
                </AccordionContent>
                </ListItem>
            </List>
        ))}
    </>
    )
}

export default AccordionList;