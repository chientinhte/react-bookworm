import React from 'react';

const InlineError = ({text}) => {
    return (
        <span className="text-danger">{text}</span>
    );
};

export default InlineError;
