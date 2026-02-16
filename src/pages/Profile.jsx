import { useAuth } from "../context/AuthContext";

export default function Profile(){
    const {user}=useAuth();

    return(
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className="text-3xl font--bold">Profile Page</h1>
            <p className="mt-4">User id: {user?._id}</p>
            <p>Role: {user?.role}</p>
        </div>
    );
}