import { ThreeDots } from 'react-loader-spinner';
import React from 'react';
import './styles.scss'

const Loader = () => {
    return (
        <div data-testid="loading-indicator" className="loader-container">
            <ThreeDots
                height="100"
                width="100"
                color="#096F3E"
                ariaLabel="Loading"
            />
        </div>
    );
};
export default Loader;