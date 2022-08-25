import { rerenderEntireTree } from "./../index";

export const state = {
  profilePage: {
    posts: [
      { id: "1", message: "Hi, how are you", likes: 10 },
      { id: "1", message: "Hi, Hi,you", likes: 10 },
      { id: "1", message: "Hi, me", likes: 10 },
    ],
    newPostText: '',
    dialogs: [
      { id: "1", name: "Lena" },
      { id: "2", name: "Pasha" },
      { id: "3", name: "Misha" },
      { id: "4", name: "Kolya" },
      { id: "5", name: "Dima" },
    ],
  },
  messagesPage: {
    messagesData: [
      { id: "1", message: "Good morning" },
      { id: "2", message: "Durling" },
      { id: "3", message: "How are you" },
      { id: "4", message: "Hi" },
      { id: "5", message: "LoliPop" },
    ],
  },
};
export let addPost = () => {
  let newPost = { id: 5, message: state.profilePage.newPostText, likesCount: 0 };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText)=>{
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}