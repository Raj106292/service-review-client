import React from 'react';

const Loader = () => {
    return (
        <div className='h-24 flex justify-center items-center'>
            <p className='w-10 h-10 border-4 border-dashed border-blue-600 rounded-full animate-spin'></p>
        </div>
    );
};

export default Loader;