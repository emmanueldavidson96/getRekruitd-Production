import React, { useState } from 'react';

function Otp({ onSubmit }) {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate OTP
        const otpValue = otp.join('');
        
        if (otpValue.length !== 6) { 
            setError('Please enter a valid 6-digit OTP.');
        } else if (isNaN(otpValue)) {
            setError('OTP should contain only numbers.');
        } else {
            setError(''); // Clear any previous error
            console.log('OTP submitted:', otpValue);
            onSubmit();  // Trigger the next step on successful OTP submission
        }
    };

    const handleChange = (e, index) => {
        if (isNaN(e.target.value)) return;
        
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Automatically move to the next input
        if (e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    };

    return (
        <div className="otp-screen grid-forget-pass">
            <form onSubmit={handleSubmit}>
                <p>We’ve sent a 6-digit code to your email</p>
                <h3>mike@example.com</h3>
                <p>Enter your OTP</p>

                <div className="otp-inputs">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={data}
                            onChange={(e) => handleChange(e, index)}
                            onFocus={(e) => e.target.select()} // Highlight input on focus
                        />
                    ))}
                </div>
                
                {error && <p className="error">{error}</p>} {/* Display error message */}

                <button type="submit">Verify OTP</button>
                <p>Resend OTP in 40 secs</p>
            </form>
        </div>
    );
}

export default Otp;

