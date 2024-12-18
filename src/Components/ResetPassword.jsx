import React, { useState } from 'react';
import { RxEyeClosed } from "react-icons/rx";
import { motion, AnimatePresence} from 'framer-motion';
import check from '../Images/check.png';

function ResetPassword({ onSubmit }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError(''); 
            onSubmit();  
            setShowPopup(true); 
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="reset-password grid-forget-pass">
            <form onSubmit={handleSubmit}>
                <h2>Reset Your Password</h2>

                <div className="input-container">
                    <input
                        id='set'
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <RxEyeClosed />
                </div>

                <div className="input-container"> 
                    <input
                        id='new'
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <RxEyeClosed />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit">Reset Password</button>
            </form>

            <AnimatePresence>
                {showPopup && (
                    <>
                    <motion.div 
                        className="popup-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={backdropStyle}>

                        <motion.div 
                            className="popup-content"
                            initial={{ y: '-100vh', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100vh', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
                            >
                                <img src={check} alt="check" />
                            <h1>Password has reset been successfully</h1>
                            <p> You can now proceed to login</p>
                            <button>Login</button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                            className="close-popup"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                        >
                            <button onClick={closePopup} style={closeButtonContentStyle}>X</button>
                        </motion.div>
                        </>
                )}
            </AnimatePresence>
        </div>
    );
}

// Styles for the pop-up
const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};




const closeButtonContentStyle = {
    background: 'none',
    border: 'none',
    color: 'black',
    fontSize: '20px',
    cursor: 'pointer',
    alignSelf:'center'
};

export default ResetPassword;
