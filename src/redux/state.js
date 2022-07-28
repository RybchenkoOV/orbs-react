let state = {
    posts: [
        { id: 1, message: '111', likesCount: 1 },
        { id: 2, message: '222', likesCount: 2 },
        { id: 3, message: '333', likesCount: 3 },
        { id: 4, message: '444', likesCount: 4 },
        { id: 5, message: '555', likesCount: 5 }
    ]
}

export let addPost = (postMessage) => {
    let postId = state.posts.id
    let newPost = {
        id: postId+1,
        message: postMessage,
        likesCount: 10
    }
    state.posts.push(newPost)
}

export default state;