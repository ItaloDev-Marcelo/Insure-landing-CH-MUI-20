import { Box, Stack, Typography } from "@mui/material";
import Icon0 from "../../assets/img/icon-snappy-process.svg";
import Icon1 from "../../assets/img/icon-affordable-prices.svg";
import Icon2 from "../../assets/img/icon-people-first.svg";
import BtnItem from "../../components/btn";



export default function Main() {

    const ArrayOfData = [
        {
            id: 0,
            icon: Icon0,
            title: "Snappy Process",
            subText: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
        },
        {
            id: 1,
            icon:  Icon1,
            title: "Affordable Prices",
            subText: "  We don’t want you worrying about high monthly costs. Our prices may be low,  but we still offer the best coverage possible."
        },
        {
            id: 2,
            icon:  Icon2,
            title: "People First",
            subText: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
        }
    ];


    return (
        <main>
             <Stack component='section'>
                <Typography component='h2'>  We’re different
                </Typography>
                <Stack component='section'>
                  {
                    ArrayOfData.map(item => {
                        const {id, icon,title, subText} = item;

                        return <Stack key={id} component='article'>
                             <Stack component={<Box/>}>
                                <img src={icon} alt={title} />
                             </Stack>
                             <Typography component='h3'>{title}</Typography>
                             <Typography component='p'>{subText}</Typography>
                        </Stack>
                    })
                  }
                </Stack>
                <Stack component='article'>
                 <Typography component='h2'></Typography>
                 <BtnItem  ButtonText='View Plans' size='250px' height='40px' ColorOfOutline='white'/>
                </Stack>
             </Stack>
        </main>
    )
}