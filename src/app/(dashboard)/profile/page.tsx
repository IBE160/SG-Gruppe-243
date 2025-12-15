import { ProfileForm } from "~/components/profile/profile-form";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Profile</h2>
        <ProfileForm />
    </div>
  );
}