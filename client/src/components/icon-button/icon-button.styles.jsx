import {Button,styled} from '@mui/material';

export const IconButtonContainer = styled(Button)(({theme})=>({
    width:'50px',
    height:'50px',
    backgroundColor:"#6C63FF",
    boxShadow:theme.shadows.shadow1,
    color:'black',
    margin:'5px 20px',

    '&:hover':{
      backgroundColor:"#6C63FF",
    }

  }))
  