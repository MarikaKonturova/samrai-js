import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
export const Profile = (props) => {
  console.log('rendered')
  return (
    <div className={s.content}>
      <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      <MyPostsContainer  />
    </div> 
  );
};
