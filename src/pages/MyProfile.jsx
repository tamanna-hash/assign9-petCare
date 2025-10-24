import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({ name: "", photo: "" });
    const [isUpdated, setIsUpdated] = useState(false); // 🟢 button label state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setIsUpdated(false); // when user types, show "Update"
    };

    const { updateProfileFunc, user, setUser } = useContext(AuthContext)
    // console.log(user);
    const handleShow = () => {
        setShow(true)
    }
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const displayName = e.target.name?.value;
        const photoURL = e.target.photo?.value;

        updateProfileFunc(displayName, photoURL)
            .then(() => {
                // Instantly update local user state
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName,
                    photoURL,
                }));
                setIsUpdated(true)

                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                toast.error(error.message || "Failed to update profile");
            });
    };

    return (
        <div>
            <div className='bg-[#f6f9ff] shadow-sm fredoka'>
                <div className="card rounded-4xl my-3 p-5 ">
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3 items-center'>
                            <img className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-[50%] border-6 border-[#82a1dd] object-cover'
                                src={user.photoURL}
                                alt="experts" />
                            <div className='flex flex-col gap-5'>
                                <p className='text-lg text-blue-900'><span className='font-bold'>Name : </span>{user.displayName}</p>
                                <p className='text-lg text-blue-900'><span className='font-bold'>Email :</span> {user.email}</p>
                            </div>
                        </div>
                        <div>

                            {!show ?
                                <button onClick={handleShow} className="btn px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-900 ">
                                    <Link>Update Profile</Link>
                                </button> :
                                <div className='bg-[#e6efff] p-7 md:p-12 rounded-3xl'>
                                    <form onSubmit={handleUpdateProfile} className="card-body">
                                        <fieldset className="fieldset">
                                            <h1 className='text-center text-2xl'>Update Profile</h1>
                                            {/* name */}
                                            <label className="label">Name</label>
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="input"
                                                placeholder="Name"
                                                required
                                            />
                                            {/* photoUrl */}
                                            <label className="label">Photo URl </label>
                                            <input
                                                name="photo"
                                                value={formData.photo}
                                                onChange={handleChange}
                                                type="text"
                                                className="input"
                                                placeholder="Photo URl"
                                                required
                                            />

                                            <button type='submit' className="btn text-blue-800 mt-4">
                                                {isUpdated ? 'Updated' : 'Update'}
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyProfile;