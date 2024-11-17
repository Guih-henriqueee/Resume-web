import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 text-primary border-solid rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
