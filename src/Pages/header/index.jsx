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
             color: 'white',
             padding: {lg: '2em 10em'}
             }} >
            <Box className='banner-container' sx={{ width: '100%'}}  >
              <Box component='div'  id='mobile-image' sx={{display: {xs: 'block', lg: 'none'}}}>
              <img src={bannerImage1} alt='none'/>
              </Box>
              <Box component='div' sx={{display: {xs: 'none', lg: 'block'},
               maxWidth: '700px', padding: '5rem'}} >
              <img src={ bannerImage2} alt='none'/>
              </Box>
            </Box>
            <Stack component='section' sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: {xs: 'center', lg: 'left'},
                justifyContent: {xs: 'center', lg: 'flex-start'},
                alignItems: {xs: 'center', lg: 'flex-start'},
                padding: '2em',
                zIndex: '2',
                height: {xs: '470px', lg: '400px'}}} id="banner-information-block">
               <Typography variant='h1' width={{lg: '370px'}} 
                padding={{xs: '0 2em', lg: '0'}}
                fontSize={{xs: '2em', lg: '3.7em'}}
                lineHeight={{lg: '55px'}}
                overflow='hidden'
                >Humanizing your insurance.</Typography>

                
               <Typography variant='p' 
                margin={{xs: '2em 0', lg: '2em 0'}}
              paddingRight={{lg: '7rem'}}
                >Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.</Typography>
               <BtnItem ButtonText='View Plans' size='170px' height='40px' 
               ColorOfOutline='white' hoverBg='white' hoverText='black' />
            </Stack>
            <Stack className='overlay'></Stack>
          </Stack>
        </>
    )
}