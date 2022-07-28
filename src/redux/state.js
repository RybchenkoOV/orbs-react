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
    let postId = state.profilePage.posts.id
    let newPost = {
        id: postId,
        message: postMessage,
        likesCount: 10
    }
    state.profilePage.posts.push(newPost)
}

export default state;