import { Card, styled } from "@mui/material";

export const HomepageContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}));

export const HomepageBanner = styled("div")(({url})=>({
    width:'95%',
    height:'360px',
    backgroundColor:'red',
    margin:'20px 0',
    backgroundImage: `url('${url}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius:10,
}))