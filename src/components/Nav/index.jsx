import { AppBar, Link, Button, Stack, List, ListItem} from '@mui/material';

import Logo from '../../assets/img/logo.svg';
import MenuI from '../../assets/img/icon-hamburger.svg'
import closeI from '../../assets/img/icon-close.svg'
import BtnItem from '../btn';
import { useState } from 'react';

export default function Nav() {

    const [toggleMenu, setTiggleMenu] = useState(false)

   return (
     <>
      <Stack >
      <AppBar  color='inherit' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
         padding: {xs: '1em 1.4em', lg: '.7em 11em'}
         }} >
          <Link href='#' sx={{marginLeft: '1em'}}><img src={Logo} /></Link>
          <Button sx={{display: {lg: 'none'}}}   onClick={() => setTiggleMenu(prev => !prev) }>
            {
               toggleMenu ?   <img src={closeI} alt='' /> : <img src={MenuI} alt='' />
            }
          </Button>
     <Stack component='nav'  display={{xs: 'none', lg: 'flex'}} 
     flexDirection='row' alignItems='center'>
           <List sx={{ display : {xs: 'none', lg: 'flex'}, width: '500px' }} >
              <ListItem sx={{ position: 'relative', left: '10em'}}   >How We Work</ListItem>
              <ListItem sx={{ width: 100}} >Blog</ListItem>
              <ListItem sx={{ width: 200}} >Account</ListItem>
           </List>
           <BtnItem ButtonText='View Plans'
            ColorOfOutline='black' size='170px' height='40px'
             hoverBg='black' hoverText='white' />
       </Stack>
       
       </AppBar>

       <Stack component='article'    className={toggleMenu ? 'menu active' : 'menu'} 
        display={{xs: 'flex', lg: 'none'}}>
           <List id='center'  component='ul' >
              <ListItem>How We Work</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Account</ListItem>
           </List>
           <BtnItem ButtonText='View Plans' size='250px' height='40px' ColorOfOutline='white' 
            hoverBg='white' hoverText='black' />
       </Stack>
      </Stack>
     </>
   )
}