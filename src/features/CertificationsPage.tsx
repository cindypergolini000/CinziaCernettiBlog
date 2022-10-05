import React  from 'react';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import WindowsLogo from './WindowsLogo.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const certifications: CertificationProps [] = [
  { name: "Exam DP-100: Designing and Implementing a Data Science Solution on Azure", certificateUri: 'https://learn.microsoft.com/en-us/certifications/exams/dp-100',  logoUri:'WindowsLogo'},
  { name: "Azure Fundamentals (AZ-900)", certificateUri: 'https://docs.microsoft.com/en-us/learn/certifications/exams/az-900',  logoUri:'WindowsLogo'},
  { name: "Azure AI Fundamentals (AI-900)", certificateUri: 'https://learn.microsoft.com/en-us/certifications/exams/ai-900' , logoUri:'WindowsLogo'},
  { name: "Azure AI Associate Expert (AI-102)", certificateUri: 'https://learn.microsoft.com/en-us/certifications/exams/ai-102' , logoUri: 'WindowsLogo'},
  { name: "Microsoft Power Platform Fundamentals (PL-900)", certificateUri: 'https://learn.microsoft.com/it-it/certifications/exams/pl-900' , logoUri: 'WindowsLogo'},

];

export const CertificationsPage = () => {
  return <div className='App-header' ><CertificationsList /> </div>
};

interface CertificationProps {
  name: string;
  certificateUri: string;
  logoUri:'WindowsLogo'|null;
}






export default function CertificationsList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List className="App-header2"
      sx={{ width: '100%', maxWidth: 800, maxHeight:'20cm', bgcolor: ' #282c34', boxShadow: 3,
      borderRadius: 5 , margin: 1 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" >
    
        </ListSubheader>
      }
    >

{certifications.map(c=><ListItemButton>
        <ListItemIcon >
        <img src={WindowsLogo} className="Cert-logo" alt="logo" />
         
        </ListItemIcon >
        <div  >
          
         
        <div><Link href={c.certificateUri} className="scrittopiccolo">{c.name} </Link></div>
        </div>
       
       
      </ListItemButton>)}
      </List>
  );
};
      // <ListItemButton>
      //   <ListItemIcon>
      //     <DraftsIcon />
      //   </ListItemIcon>
      //   <ListItemText primary="Drafts" />
      // </ListItemButton>
      // <ListItemButton onClick={handleClick}>
      //   <ListItemIcon>
      //     <InboxIcon />
      //   </ListItemIcon>
      //   <ListItemText primary="Inbox" />
      //   {open ? <ExpandLess /> : <ExpandMore />}
      // </ListItemButton>
      // <Collapse in={open} timeout="auto" unmountOnExit>
      //   <List component="div" disablePadding>
      //     <ListItemButton sx={{ pl: 4 }}>
      //       <ListItemIcon>
      //         <StarBorder />
      //       </ListItemIcon>
      //       <ListItemText primary="Starred" />
      //     </ListItemButton>
      //   </List>
      // </Collapse>
   
//   );
// }
