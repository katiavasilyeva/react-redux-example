import React from 'react';


export const AppComponent = (props) => <React.Fragment> <p>{props.yoBool? props.showSmiley : "HAHAH"} </p> <button onClick={props.onClick}></button> </React.Fragment>;
