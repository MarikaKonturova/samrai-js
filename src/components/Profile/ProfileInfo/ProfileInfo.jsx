import React from "react";
import { Preloader } from "./../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks'
import s from './ProfileInfo.module.css'
import logo from '../../../assets/logo192.png'
export const ProfileInfo = ({ profile,status,isOwner, savePhoto, updateStatus }) => {
  const onMainPhotoUpdate = (e)=>{
    if(e.target.files.length){
      console.log(e.target.files[0])
      savePhoto(e.target.files[0])
    }
  }
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={profile.photos.large || logo} alt="avatar" className={s.profile_image} />
      {isOwner && <input type={'file'} onChange={onMainPhotoUpdate}/>}
      {/* <ProfileStatus status={status} updateStatus={updateStatus} /> */}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      <h2>{profile.fullName}</h2>
      <p>
        <b>About me: </b>
      </p>
      <p>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? (
          <span>{profile.lookingForAJobDescription}</span>
        ) : (
          <span>no</span>
        )}
      </p>
      <div>
        <b>Contacts:</b>
        {profile.contacts.facebook && (
          <p>
            <b>FaceBook:</b> {profile.contacts.facebook}
          </p>
        )}
        {profile.contacts.website && (
          <p>
            <b>Web-site:</b> {profile.contacts.website}
          </p>
        )}
        {profile.contacts.vk && (
          <p>
            <b>Vk:</b> {profile.contacts.vk}
          </p>
        )}
        {profile.contacts.twitter && (
          <p>
            <b>Twitter:</b> {profile.contacts.twitter}
          </p>
        )}
        {profile.contacts.instagram && (
          <p>
            <b>Instagram:</b> {profile.contacts.instagram}
          </p>
        )}
        {profile.contacts.youtube && (
          <p>
            <b>YouTube:</b> {profile.contacts.youtube}
          </p>
        )}
        {profile.contacts.github && (
          <p>
            <b>GitHub:</b> {profile.contacts.github}
          </p>
        )}
        {profile.contacts.mainLink && (
          <p>
            <b>MainLink:</b> {profile.contacts.mainLink}
          </p>
        )}
      </div>
    </div>
  );
};
