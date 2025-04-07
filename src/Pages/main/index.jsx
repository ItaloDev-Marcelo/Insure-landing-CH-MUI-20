import { Box, Stack, Typography } from "@mui/material";
import BtnItem from "../../components/btn";
import Data from './Data';


export default function Main() {

    return (
        <main>
             <Stack component='section' marginTop={{lg: '-2em'}} padding={{xs: '2em 1em', lg: '1.5rem 5rem 5rem 5rem '}} 
             textAlign={{xs: 'center', lg: 'left'}}>
                <Typography component='h2' id='about-title' fontSize={{xs: '2.5em', lg: '3em'}} margin={{xs: '1.2em 0', lg: '2em 0'}}>  We’re different
                </Typography>
                <Stack component='section' 
                display='flex' flexDirection={{xs: 'column', lg: 'row'}}
                 justifyContent={{lg: 'space-between'}} 
                 alignContent={{lg: 'center'}} 
                 alignItems={{lg: 'center'}}
                 margin={{xs: '0 auto', lg: '0'}}
                 >
                  {
                    Data.map(item => {
                        const {id, icon,title, subText} = item;

                        return <Stack sx={{display: 'flex', flexDirection: 'column', justifyContent:
                          {xs: 'center', lg: 'flex-start'}, width: {xs: '300px', lg: '300px'}, 
                           textAlign: {xs: 'center', lg: 'left'}}} margin={{xs: '1.5em 0', lg: '0'}} key={id}
                           component='article'>
                             <Stack className="cart-icon" margin={{xs: '0 auto', lg: '0 '}} >
                                <img src={icon} alt={title} />
                             </Stack>
                             <Typography component='h3' fontSize={{xs: '1.4em', lg: '1.7em'}} margin={{xs: '.5em 0', lg: '.4em 0'}}>{title}</Typography>
                             <Typography component='p' >{subText}</Typography>
                        </Stack>
                    })
                  }
                </Stack>
                <Stack component='article' className='mini-box' sx={{ width: {xs: '400px', lg: '700px'}, 
                height: {xs: '300px', lg: '250px'}}} margin={{xs: '2em auto', lg: '7em auto 1em auto'}}>
                 <Typography component='h2'>Find out more about how we work</Typography>
                 <BtnItem ButtonText='How we work' size='170px' height='40px'  ColorOfOutline='white' hoverBg='white' hoverText='black' />
                </Stack>
             </Stack>
        </main>
    )
}