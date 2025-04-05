import { AppBar, Link, Button, Stack, List, ListItem} from '@mui/material';

import Logo from '../../assets/img/logo.svg';
import MenuI from '../../assets/img/icon-hamburger.svg'
import BtnItem from '../btn';
import { useState } from 'react';

export default function Nav() {

    const [toggleMenu, setTiggleMenu] = useState(false)

   return (
     <>
      <Stack >
      <AppBar color='white' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
         padding: {xs: '1em 1.4em', lg: '.7em 7em'}
         }} >
          <Link href='#' sx={{marginLeft: '1em'}}><img src={Logo} /></Link>
          <Button sx={{display: {lg: 'none'}}}   onClick={() => setTiggleMenu(prev => !prev) }>
             <img src={MenuI} alt='' />
          </Button>
     <Stack component='nav'  display={{xs: 'none', lg: 'flex'}} flexDirection='row' alignItems='center'>
           <List sx={{ display : {xs: 'none', lg: 'flex'}, width: '400px' }} >
              <ListItem>How We Work</ListItem>
              <ListItem sx={{paddingLeft: '4em'}}>Blog</ListItem>
              <ListItem>Account</ListItem>
           </List>
           <BtnItem ButtonText='View Plans' ColorOfOutline='white' size='170px' height='40px' />
       </Stack>
       
       </AppBar>

       <Stack component='article'    className={toggleMenu ? 'menu active' : 'menu'} 
        display={{xs: 'flex', lg: 'none'}}>
           <List id='center'  component='ul' >
              <ListItem>How We Work</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Account</ListItem>
           </List>
           <BtnItem ButtonText='View Plans' size='250px' height='40px' ColorOfOutline='white' />
       </Stack>
      </Stack>
     </>
   )
}