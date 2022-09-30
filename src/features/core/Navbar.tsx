import React from 'react';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const DividerStack=()=> {
  function setActive(params: { isActive: boolean }) {
    return params.isActive ? 'nav-link-text' : 'nav-link '
  }


  return (
    <div className='navBar'>
      <Stack
     
     direction="row"
     divider={<Divider orientation="vertical" flexItem />}
     spacing={5}
   >
     <Item className="color">   
       <NavLink
           className={setActive }
           to="/home"> <h5>Home</h5></NavLink>
           </Item>
     <Item>
     <NavLink
           className={setActive}
           to="/admin">  <h5>Education and Work Experience</h5> </NavLink>
     </Item>
     <Item>
     <NavLink
           className={setActive}
           to="/settings"> <h5>Licenses and certifications</h5>  </NavLink>
     </Item>
   </Stack>
 </div>
);
}
 
 


// export const Navbar = () => {

//   function setActive(params: { isActive: boolean }) {
//     return params.isActive ? 'nav-link text-danger' : 'nav-link '
//   }

//   return (
//     <nav className="navbar navbar-expand navbar-light bg-light">
//       <div className="collapse navbar-collapse" >
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink
//               className={setActive}
//               to="/home">Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className={setActive}
//               to="/admin">Admin</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className={setActive}
//               to="/settings">Settings</NavLink>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   )
// };