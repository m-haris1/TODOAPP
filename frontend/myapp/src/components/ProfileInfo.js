// import React from 'react'
// import { generateInitials } from '../utils/helper'

// const ProfileInfo = ({onLogout,userInfo}) => {
//   console.log(userInfo);
//   return (
//     <div className='flex gap-3'>
//         <div>
//             {generateInitials(userInfo.name)}
//         </div>
//       <div>
  
//         <div>{userInfo.name}</div>
//         <button className='text-sm text-slate-700 underline'
//         onClick={onLogout}
//         >Log Out</button>
//       </div>
//     </div>
//   )
// }

// export default ProfileInfo


import React from 'react';
import { generateInitials } from '../utils/helper';

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ProfileInfo = ({ onLogout, userInfo }) => {
  console.log(userInfo);
  const initials = generateInitials(userInfo.fullName);
  const bgColor = getRandomColor();

  return (
    <div className='flex items-center gap-3'>
      <div
        className='w-12 h-12 flex items-center justify-center rounded-full text-white font-bold'
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
      <div>
        <div className='text-lg font-semibold'>{userInfo.fullName}</div>
        <button
          className='text-sm text-slate-700 underline'
          onClick={onLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
