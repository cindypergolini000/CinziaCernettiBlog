import React from 'react';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeWorkIcon from '@mui/icons-material/HomeWork';


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
     className='navBar'
     direction="row"
     divider={<Divider orientation="vertical" flexItem />}
     spacing={5}
     sx={{
      bgcolor: ' #282c34',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
    }}
   >
     <Item className="color">
      <HomeWorkIcon fontSize='large'/>   
       <NavLink 
           className={setActive  }
           to="/home"> <h5>Home</h5></NavLink>
           </Item>
     <Item className="color">
      <SchoolIcon fontSize='large'/>
      <WorkIcon fontSize='large'/>
     <NavLink
           className={setActive}
           to="/education">  <h5>Education and Work Experience</h5> </NavLink>
     </Item>
     <Item className="color">
      <MilitaryTechIcon fontSize='large'/>
     <NavLink
           className={setActive}
           to="/certifications"> <h5>Licenses and certifications</h5>  </NavLink>
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