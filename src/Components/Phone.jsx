import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

function Phone({ onSubmit }) {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number length (assuming a minimum length of 10 digits)
        if (phone.length < 10) {
            setError('Please enter a valid phone number.');
        } else {
            setError(''); // Clear any existing errors
            onSubmit();
        }
    };

    return (
        <div className="phone-screen grid-forget-pass">
            <form onSubmit={handleSubmit}>
                <h2>Enter the phone number associated with your account</h2>
                <div className="input-container">
                    <PhoneInput
                        country={'us'}
                        placeholder="Enter your phone number" 
                        value={phone} 
                        onChange={setPhone}
                        enableAreaCodes={true}
                        enableTerritories={true}
                        inputStyle={{
                            width: '350px',
                            paddingLeft: '50px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            border: '0px',
                        }}
                    />
                </div>

                {error && <p className="error" style={{
                  alignSelf:'center'
                }}>{error}</p>}

                <button type="submit">Proceed</button>
            </form>
        </div>
    );
}

export default Phone;

