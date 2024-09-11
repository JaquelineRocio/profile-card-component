import "./ProfileHeader.css";
import imageProfile from "../../assets/image-profile.jpg";
const ProfileHeader = () => {
  return (
    <header>
      <img src={imageProfile} alt="image profile" className="profile-image" />
    </header>
  );
};

export default ProfileHeader;
