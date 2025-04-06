import { Button } from "@mui/material";


export default function BtnItem({ButtonText, ColorOfOutline, size, height, hoverBg, hoverText}) {
     return (
        <Button variant="outlined"  sx={{width: size, height: height, 
            color: ColorOfOutline, borderColor: ColorOfOutline,  '&:hover': {
            backgroundColor: hoverBg,
            border: 'none',
            outline: 'none',
            color: hoverText
        }}}  >
            {ButtonText}
        </Button>
     )
}