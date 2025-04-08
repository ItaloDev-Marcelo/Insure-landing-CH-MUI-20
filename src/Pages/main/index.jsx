import { Box, Stack, Typography } from "@mui/material";
import BtnItem from "../../components/btn";
import Data from './Data';


export default function Main() {

    return (
        <main>
             <Stack component='section' id='about' marginTop={{lg: '-2em'}}
              padding={{xs: '2em 1em', lg: '1.5rem 12rem 5rem 12rem '}} 
             textAlign={{xs: 'center', lg: 'left'}}>
                <Typography component='h2' id='about-title' fontSize={{xs: '2.5em', lg: '4.5em'}} margin={{xs: '1.2em 0', lg: '2em 0'}}>  We’re different
                </Typography>
                <Stack component='section' 
                display='flex' flexDirection={{xs: 'column', lg: 'row'}}
                 justifyContent={{lg: 'space-between'}} 
                 alignContent={{lg: 'center'}} 
                 alignItems={{lg: 'center'}}
                 margin={{xs: '0 auto', lg: '0'}}
                 position='relative'
                 top={{lg: '-4em'}}
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
                             <Typography variant='h3' fontSize={{xs: '1.4em', lg: '1.7em'}} 
                             margin={{xs: '.5em 0', lg: '.7em 0'}}>{title}</Typography>
                             <Typography variant='p' color="hsl(216, 30%, 68%)" >{subText}</Typography>
                        </Stack>
                    })
                  }
                </Stack>
                <Stack component='article' className='mini-box'
                 sx={{ width: {xs: '300px', lg: '800px'}, 
                height: {xs: '250px', lg: '250px'}}} 
                margin={{xs: '5rem auto', lg: '7rem auto 5rem auto'}}>
                 <Typography variant='h2' 
                  padding={{xs: '0 2em'}} width={{lg: '500px'}} 
                  fontSize={{xs: '2em', lg: '2.4em'}}
                   textAlign={{lg: 'left'}}>Find out more about how we work</Typography>
                <Stack marginRight={{lg: '1.3em'}}>
                <BtnItem ButtonText='How we work' size='170px' height='40px' ColorOfOutline='white' hoverBg='white' hoverText='black' />
                </Stack>
                </Stack>
             </Stack>
             <Stack className='overlay0'>

             </Stack>
        </main>
    )
}