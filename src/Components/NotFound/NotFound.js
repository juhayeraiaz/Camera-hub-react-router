import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger'>404 Error!!</h1>
            <h2>Page Not Found</h2>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
        </div>
    );
};

export default NotFound;