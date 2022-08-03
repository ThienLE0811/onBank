import React from "react";
import {
  Button,
  f7,
  Link
} from "framework7-react";


const ButtonAll = (props) =>{
    

    return(
         (props.setTitle) &&
         (
        <Button fill 
            style={{background: 'linear-gradient(90deg, rgb(4, 164, 104) 0%, rgb(33, 121, 206) 100%)', height:'48px'}}>
                {props.setTitle}
        </Button>
        )
    )
} 

export default ButtonAll;