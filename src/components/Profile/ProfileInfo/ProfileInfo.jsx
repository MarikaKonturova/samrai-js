import { useState } from "react";
import { Preloader } from "./../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";
import logo from "../../../assets/logo192.png";
import { Field, reduxForm } from "redux-form";
import { ProfileDataReduxForm } from "./ProfileDataForm/ProfileDataForm";
import {} from "./../../common/FormControls/FormsControls";

export const ProfileInfo = ({
  profile,
  status,
  isOwner,
  savePhoto,
  updateStatus,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  const onSubmit =  (formData) => {
    const {
      fullName,
      lookingForAJob,
      github,
      instagram,
      facebook,
      twitter,
      website,
      youtube,
      mainLink,
      vk,
      lookingForAJobDescription,
      aboutMe,
    } = formData;

    const newProfile = {
      fullName: fullName || profile.fullName,
      lookingForAJob: lookingForAJob || false,
      lookingForAJobDescription:
        (lookingForAJobDescription || profile.lookingForAJob) ?? "",
      aboutMe: aboutMe || profile.aboutMe,
      contacts: {
        github: github ?? profile.github ?? null,
        instagram: instagram ?? profile.contacts.instagram ?? null,
        facebook: facebook ?? profile.contacts.facebook ?? null,
        twitter: twitter ?? profile.contacts.twitter ?? null,
        vk: vk ?? profile.contacts.vk ?? null,
        website: website ?? profile.contacts.website ?? null,
        youtube: youtube ?? profile.contacts.website ?? null,
        mainLink: mainLink ?? profile.contacts.mainLink ?? null,
      },
    };
    saveProfile(newProfile).then(()=>{
     setEditMode(false)
    })
   

  };
  const onMainPhotoUpdate = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src={profile.photos.large || logo}
        alt="avatar"
        className={s.profile_image}
      />
      {isOwner && <input type={"file"} onChange={onMainPhotoUpdate} />}
      {/* <ProfileStatus status={status} updateStatus={updateStatus} /> */}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      {editMode ? (
        <ProfileDataReduxForm
          profile={profile}
          setEditMode={setEditMode}
          onSubmit={onSubmit}
          initialValues={profile}
        />
      ) : (
        <ProfileData
          profile={profile}
          editMode={editMode}
          setEditMode={setEditMode}
          isOwner={isOwner}
        />
      )}
    </div>
  );
};

const ProfileData = ({ profile, setEditMode, isOwner }) => {
  return (
    <>
      {isOwner && <button onClick={() => setEditMode(true)}>edit</button>}
      <h2>{profile.fullName}</h2>
      <p>
        <b>About me: {profile.aboutMe}</b>
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
            <b>Facebook:</b> {profile.contacts.facebook}
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
    </>
  );
};
