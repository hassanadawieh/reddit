import React from 'react';
import "./index.css";
import Button from '@mui/material/Button';
 const MainButton = (props) => {
  return (
    <Button
      style={props.style}
   > {props.children}
   </Button>

  );
}

export default MainButton; 