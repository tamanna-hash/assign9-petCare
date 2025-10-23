import React, { useState } from 'react';
import { Link } from 'react-router';

const MyProfile = () => {
    const [show, setShow] = useState(false)
    const handleShow= () => {
        setShow(true)
    }
    return (
        <div>
            <div className='bg-[#f6f9ff] shadow-sm'>
                <div className="card rounded-4xl my-3 p-5 ">
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3 items-center'>
                            <img className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-[50%] object-cover'
                                src='https://i.ibb.co.com/KzjWmPDs/expert1.jpg'
                                alt="experts" />
                            <div className='flex flex-col gap-5'>
                                <p>Name</p>
                                <p>Email</p>
                            </div>
                        </div>
                        <div>

                            {!show ?
                                <button onClick={handleShow} className="btn px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-900 ">
                                    <Link>Update Profile</Link>
                                </button> :
                                <div className='bg-[#e6efff] p-7 md:p-12 rounded-3xl'>
                                    <form className="card-body">
                                        <fieldset className="fieldset">
                                            <h1 className='text-center text-2xl'>Book Service</h1>
                                            {/* name */}
                                            <label className="label">Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="input"
                                                placeholder="Name"
                                                required
                                            />
                                            {/* email  */}
                                            <label className="label">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="input"
                                                placeholder="Email"
                                                required
                                            />
                                            <button type="submit" className="btn mt-4">
                                                Update
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