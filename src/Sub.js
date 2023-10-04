import React, { useState } from 'react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    
    console.log('Subscribing:', email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        required
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default EmailSubscribe;
