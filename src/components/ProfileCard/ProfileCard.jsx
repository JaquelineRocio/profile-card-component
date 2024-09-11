import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileStats from "../ProfileStats/ProfileStats";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <main>
      <ProfileHeader />
      <ProfileDetails />
      <ProfileStats />
    </main>
  );
};

export default ProfileCard;
