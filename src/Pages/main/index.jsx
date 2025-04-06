import { Box, Stack, Typography } from "@mui/material";
import BtnItem from "../../components/btn";
import Data from './Data'

export default function Main() {
    return (
        <main>
             <Stack component='section' padding='2em 1em'>
                <Typography component='h2'>  We’re different
                </Typography>
                <Stack component='section'>
                  {
                    Data.map(item => {
                        const {id, icon,title, subText} = item;

                        return <Stack key={id} component='article'>
                             <Stack className="cart-icon">
                                <img src={icon} alt={title} />
                             </Stack>
                             <Typography component='h3'>{title}</Typography>
                             <Typography component='p'>{subText}</Typography>
                        </Stack>
                    })
                  }
                </Stack>
                <Stack component='article'>
                 <Typography component='h2'>Find out more about how we work</Typography>
                 <BtnItem ButtonText='How we work' size='170px' height='40px'  ColorOfOutline='white' hoverBg='white' hoverText='black' />
                </Stack>
             </Stack>
        </main>
    )
}