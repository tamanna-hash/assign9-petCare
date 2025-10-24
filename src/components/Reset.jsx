import React, { useRef } from "react";

import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Reset = () => {
    const { sendPassResetEmailFunc, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef(null); // ✅ keeps track of input value

    const defaultEmail = location.state?.email || ""; // prefill from login

    const handleReset = (e) => {
        e.preventDefault();
        const email = emailRef.current.value; // ✅ read the current value

        sendPassResetEmailFunc(email)
            .then(() => {
                setLoading(false);
                toast.success("Check your email to reset your password.");
                window.open("https://mail.google.com", "_blank");
                navigate("/auth/login");
            })
            .catch((e) => toast.error(e.message));
    };
    // console.log("From login:", location.state);

    return (
        <div className='bg-[#f4f7fd]'>
            <div className='max-container fredoka '>
                <div className='bg-[#e6efff] p-5 md:p-8 rounded-3xl'>
                    <form onSubmit={handleReset} className="card-body w-[200px] md:w-[400px]">
                        <fieldset className="fieldset">
                            <h1 className='text-center text-lg md:text-2xl'>Reset Password</h1>
                            {/* email  */}
                            <label className="label">Email</label>
                            <input
                                ref={emailRef}
                                name="email"
                                type="email"
                                className="input"
                                placeholder="Email"
                                defaultValue={defaultEmail} // 👈 prefill email
                                required
                            />

                            <button type='submit' className="btn btn-sm md:btn-md text-blue-800 mt-4">
                                Reset
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;