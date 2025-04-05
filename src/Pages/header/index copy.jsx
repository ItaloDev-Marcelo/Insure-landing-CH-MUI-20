import { Box, Stack, Typography } from "@mui/material";
import bannerImage1 from '../../assets/img/image-intro-mobile.jpg';
import bannerImage2 from '../../assets/img/image-intro-desktop.jpg';
import BtnItem from "../../components/btn";

export default function Header() {
    
    return (
        <>
          <Stack component='header' id='Hero' sx={{display: 'flex',
             flexDirection: {xs: 'column', lg: 'row-reverse'},
             alignItems: 'center',
             padding: {lg: '2em 5em'},
             color: '#fff'
             }} >
            <Box component='figure' sx={{width: '100%', 
                zIndex: '1'}}  >
              <Box component='div' sx={{display: {xs: 'block', lg: 'none'}}}>
              <img src={bannerImage1} alt='none'/>
              </Box>
              <Box component='div' sx={{display: {xs: 'none', lg: 'block'}, maxWidth: '200px', padding: '5rem'}} >
              <img src={ bannerImage2} alt='none'/>
              </Box>
            </Box>
            <Stack component='section' sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: {xs: 'center', lg: 'left'},
                justifyContent: {xs: 'center', lg: 'flex-start'},
                alignItems:  {xs: 'center', lg: 'flex-start'},
                padding: '2em',
                zIndex: '100',
                height: {xs: '300px', lg: '400px'}}} className="banner-information-block">
               <Typography component='h1'>Humanizing your insurance.</Typography>
               <Typography component='p' margin='2em 0'>Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.</Typography>
               <BtnItem ButtonText='View Plans' size='250px' height='40px' ColorOfOutline='white' />
            </Stack>
          </Stack>
        </>
    )
}