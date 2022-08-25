export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you", likes: 10 },
        { id: "1", message: "Hi, Hi,you", likes: 10 },
        { id: "1", message: "Hi, me", likes: 10 },
      ],
      newPostText: "",
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
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree () {},
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText (newText)  { 
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe (observer){
    this._rerenderEntireTree = observer;
  },
};

window.store = store;
