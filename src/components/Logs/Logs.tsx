import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DevicesIcon from "@mui/icons-material/Devices";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid, Link } from "@mui/material";
import HeaderBar from "../Header/HeaderBar";

const drawerWidth = 540;

interface Props {

 name:string
subtitle:string

  window?: () => Window;
}

interface functions {
  name: string;
  path: string;
}


const Logs = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [IsOpen, SetIsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    
    SetIsOpen(!IsOpen);
    setMobileOpen(!mobileOpen)
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      
      
        <HeaderBar name={props.name} subtitle={props.subtitle}/>
        
      

      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    
        <span>
        {/* <Grid item md={6} className="border border-black"> */}
         <Typography
                    variant="caption"
                    color="text.secondary"
                    // component="div"
                    className=""
                
                  >
        <Button variant="text" onClick={handleDrawerToggle }  >
            <Typography variant="caption">
                view logs
            </Typography>
        </Button>
        </Typography>
        {/* </Grid> */}
      <Box sx={{ display: "flex" }}>
     
        {/* <CssBaseline /> */}

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 300,
              },
              // Set anchor to "right" to make the drawer slide out from the right
              "& .MuiDrawer-paperAnchorRight": { borderLeft: "none" },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="temporary"
            open={IsOpen}
            anchor="right"
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              // Set anchor to "right" to make the drawer slide out from the right
              "& .MuiDrawer-paperAnchorRight": { borderLeft: "none" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
           <Toolbar /> 
         
        </Box> */}
      </Box>
      </span>
    
  );
};

export default Logs;
