import React from 'react';

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="text-center">
                <div className="loader border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin mx-auto"></div>
                <p className="text-white mt-4 text-xl">Loading...</p>
            </div>
        </div>
    );
};


