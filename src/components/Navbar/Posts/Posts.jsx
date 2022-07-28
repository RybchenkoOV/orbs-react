import React, {useState} from "react";
import s from './Posts.module.css'
import PostElement from "./PostElement/PostElement";


const Posts = (props) => {
    const [_, forceReload] = useState({});

    console.log(props)
    let array = props.appState.posts

    let postElements = array.map(p => <PostElement id={p.id} message={p.message} likesCount={p.likesCount} />);
    return (
        <div>
            <div>
                <input type="textarea" />
                <button onClick={()=>{props.addPost();
                forceReload({})}} type="submit">Send</button>

            </div>
            <span className={s.span}>
                {postElements}
            </span>
        </div>
    )
}

export default Posts