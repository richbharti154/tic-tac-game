import React from 'react';
function Square(props){
return(
    <div
    onClick={props.onClick}
     style={{border:"1px solid",height:"100px", width:"100px"}}>
        <h1>{props.value}</h1>
    </div>
);
};
export default Square;
