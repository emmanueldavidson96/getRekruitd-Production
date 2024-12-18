import React, { useState } from 'react';

function Email({ onSubmit }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            onSubmit(); 
        }
    };

    return (
        <div className="email-screen grid-forget-pass">
            <form onSubmit={handleSubmit}>
                <h2>Enter the email associated with your account</h2>
                <div className="input-container">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                </div>
               
                <button type="submit">Proceed</button>
            </form>
        </div>
    );
}

export default Email;
