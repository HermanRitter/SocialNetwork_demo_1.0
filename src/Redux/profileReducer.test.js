import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'blablabla =)', likesCount: 19},
        {id: 4, message: 'SHALOM!', likesCount: 5678},
    ]
};


it('new post should be incremented', () => {
    //1 test data
    let action = addPostActionCreator('salam')

    //2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.posts.length).toBe(5)
})


it('message of new post should be correct', () => {
    //1 test data
    let action = addPostActionCreator('salam')

    //2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.posts[4].message).toBe('salam')
})


it('after deleting length of messages should be increment', () => {
    //1 test data
    let action = deletePost(1);

    //2 action
    let newState = profileReducer(state, action);

    //3 expectation
    expect(newState.posts.length).toBe(3)
})