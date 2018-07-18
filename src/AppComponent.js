import React from 'react';


export const AppComponent = (props) => <React.Fragment> <p>{props.yoBool? props.showSmiley : "HAHA"} </p> <button onClick={props.onClick}></button> </React.Fragment>;
