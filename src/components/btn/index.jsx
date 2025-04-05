import { Button } from "@mui/material";


export default function BtnItem({ButtonText, ColorOfOutline, size, height}) {
     return (
        <Button variant="outlined" sx={{width: size, height: height, '&:hover': {
            backgroundColor: 'black',
            borderColor: '#000',
            color: '#fff'
        }}}  color={ColorOfOutline}  >
            {ButtonText}
        </Button>
     )
}