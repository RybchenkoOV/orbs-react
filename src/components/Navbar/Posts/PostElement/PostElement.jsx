import React from "react";
import s from './PostElement.module.css'

const PostElement = (props) => {

    return (
        <div>
            <span className={s.span}>
                {props.id}+{props.message}+{props.likesCount}
            </span>
        </div>
    )
}

export default PostElement