import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const [show, setShow] = useState(false)
    // const [formData, setFormData] = useState({ name: "", photo: "" });
    const [isUpdated, setIsUpdated] = useState(false); //

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    //     setIsUpdated(false); // when user types, show "Update"
    // };

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
                setShow(false)
            })
            .catch((error) => {
                toast.error(error.message || "Failed to update profile");
            });
    };

    return (
        <div>
            <div className='bg-[#f6f9ff] shadow-sm fredoka p-4'>
                <div className="card rounded-4xl my-3 md:p-5 ">
                    <div className='flex flex-col lg:flex-row md:gap-8 lg:gap-0 items-center justify-between'>
                        <div className='flex flex-col md:flex-row gap-3 items-center'>
                            <img className='h-[60px] w-[60px] md:h-[200px] md:w-[200px] rounded-[50%] md:border-6 border-2 border-[#82a1dd] object-cover'
                                src={user.photoURL}
                                alt="experts" />
                            <div className='flex flex-col md:gap-5 '>
                                <p className='text-xs md:text-lg text-blue-900'><span className='font-bold text-sm'>Name : </span>{user.displayName}</p>
                                <p className='text-xs md:text-lg text-blue-900 '><span className='font-bold text-sm'>Email :</span> {user.email}</p>
                            </div>
                        </div>
                        <div>

                            {!show ?
                                <button onClick={handleShow} className="btn btn-sm md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-900 ">
                                    <Link>Update Profile</Link>
                                </button> :
                                <div className='bg-[#e6efff] p-7 md:p-12 rounded-3xl'>
                                    <form onSubmit={handleUpdateProfile} className="card-body">
                                        <fieldset className="fieldset">
                                            <h1 className='text-center text-lg md:text-2xl'>Update Profile</h1>
                                            {/* name */}
                                            <label className="label">Name</label>
                                            <input
                                                name="name"
                                                // value={formData.name}
                                                // onChange={handleChange}
                                                type="text"
                                                className="input"
                                                placeholder="Name"
                                                required
                                            />
                                            {/* photoUrl */}
                                            <label className="label">Photo URl </label>
                                            <input
                                                name="photo"
                                                // value={formData.photo}
                                                // onChange={handleChange}
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