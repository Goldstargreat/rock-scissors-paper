import React from "react";
import Scissor from "../imgs/Scissor.png";
import Rocks from "../imgs/Rocks.jpg";
import Paper from "../imgs/Paper.png";

const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img"
                 src={Scissor} alt="scissor"/>
            <h2>WIN</h2>
        </div>

    )
}
export default Box;