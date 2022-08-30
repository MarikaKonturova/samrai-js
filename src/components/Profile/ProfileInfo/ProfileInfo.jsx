import React from "react";
import { Preloader } from "./../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks'
export const ProfileInfo = ({ profile,status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={profile.photos.large} alt="avatar" />
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
