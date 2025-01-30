import React from 'react';

const page = ({ params }) => {

    const id = params.id

    return (
        <div className='text-4xl font-bold text-center mt-20'>
            <p className='bg-gray-900 text-white py-4 mb-5'>Services details page</p>

            <p>id= {id}</p>


        </div>
    );
};

export default page;