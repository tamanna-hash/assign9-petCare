import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookNow = () => {
    const [visible, setVisible] = useState(true);
    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Successfully booked')
        setVisible(false)
    };
    return (
        <div>
            {visible &&
                <div className='bg-[#e6efff] p-4  md:p-12 rounded-3xl'>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button type="submit" className="btn btn-sm md:btn-md mt-4">
                                Book Now
                            </button>
                        </fieldset>
                    </form>
                </div>
            }

        </div>
    );
};

export default BookNow;