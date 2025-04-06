import {Stack, Typography, List, ListItem} from "@mui/material";

import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
       <Stack component='footer'>
           <Stack component='section'>
                <Typography component='h5'></Typography>
                <Stack className='row-icons'>
                   <FacebookIcon/>
                   <TwitterIcon/>
                   <PinterestIcon/>
                   <InstagramIcon />
                </Stack>
                <hr/>
           </Stack>
           <Grid  container  >
               <Grid size={{xs: 12, lg: 3}}>
                  <List className='footer-list'>
                     <ListItem sx={{marginBottom: '1em'}}>Our company</ListItem>
                     <ListItem> How we work</ListItem>
                     <ListItem>Why Insure?</ListItem>
                     <ListItem>View plans</ListItem>
                     <ListItem>Reviews</ListItem>
                  </List>
,              </Grid>
               <Grid size={{xs: 12, lg: 3}}>
                  <List className='footer-list'>
                     <ListItem sx={{marginBottom: '1em'}}>Help me</ListItem>
                     <ListItem>FAQ</ListItem>
                     <ListItem>Terms of use</ListItem>
                     <ListItem>Privacy policy</ListItem>
                     <ListItem>Cookies</ListItem>
                  </List>
               </Grid>
               <Grid size={{xs: 12, lg: 3}}>
                  <List className='footer-list'>
                     <ListItem sx={{marginBottom: '1em'}}>Contact</ListItem>
                     <ListItem>Sales</ListItem>
                     <ListItem>Support</ListItem>
                     <ListItem>Live chat</ListItem>
                  </List>
               </Grid>
               <Grid size={{xs: 12, lg: 3}}>
                  <List className='footer-list'>
                     <ListItem sx={{marginBottom: '1em'}}>Others</ListItem>
                     <ListItem> Careers</ListItem>
                     <ListItem>Press</ListItem>
                     <ListItem>Licenses</ListItem>
                  </List>
               </Grid>
           </Grid>
       </Stack>
    )
}