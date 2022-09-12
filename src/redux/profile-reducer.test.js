import { profileReducer, addPostActionCreator } from "./profile-reducer";
import { v1 } from 'uuid';

const postId1= v1()
const postId2= v1()
const state = {
    posts: [
        {id: postId1, message: 'Its my first post', likes: 32},
        {id: postId2, message: 'Its my second post', likes: 54}]
}

test('New post should be added', () => {
    // 1. test data
    const action = addPostActionCreator('Hello')
    // 2. action
    const newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('Hello')
    expect(newState.posts[0].likesCount).toBe(0)
})

test('Post should be deleted', () => {
    // 1. test data
    const action = deletePostActionCreator(postId1)
    // 2. action
    const newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(1)
})