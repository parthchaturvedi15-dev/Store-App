import { useAuth } from "../context/AuthContext";
import LogoutButton from '../Components/Logoutbutton';

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
    
      <div className='min-h-screen flex flex-col items-center justify-center bg-black'>
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <p className="mt-4">User id: {user._id}</p>
        <p>Role: {user.role}</p>
        <LogoutButton />
      </div>
      
    </>
  );
}
