import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import from 'react-router-dom'

function Qualification() {
  return (
    <>
      <div className='ul-list'>
        <ul>
          <li>
            <Link className='btn-1' to='/qualification'>Education</Link>
          </li>
          <li>
            <Link className='btn-2' to='/qualification/internship'>Internship</Link>
          </li>
        </ul>
      </div>
      
      <Outlet />
    </>
  );
}

export default Qualification;
