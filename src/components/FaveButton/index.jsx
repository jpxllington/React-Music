import React , { useState }from 'react';

export const FaveButton = () => {
    const [faved, setFaved] = useState(false)
    const handleClick = () => setFaved((prevFaved) => !prevFaved);
    return (
        <span 
            onClick={handleClick}
            role="switch"
            style={{ color: faved ? "red": 'grey' }}
        >❤</span>
    );
}