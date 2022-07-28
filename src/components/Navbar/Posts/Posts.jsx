import React from "react";
import s from './Posts.module.css'
import PostElement from "./PostElement/PostElement";
const Posts = (props) => {

    
    return (
        <div>
            <div>
                <input type="textarea" />
                <button onClick={props.} type="submit">Send</button>

            </div>
            <span className={s.span}>
                {s.postElements}
            </span>
        </div>
    )
}

export default Posts