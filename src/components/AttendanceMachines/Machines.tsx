import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CropFreeIcon from "@mui/icons-material/CropFree";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import Logs from "../Logs/Logs";
import MachinesMenu from "../../Menu/MachinesMenu";

const data = [
  {
    id: 1,
    title: "Machine 1",
    content: "Content for Card 1",
    status: "on",
    location: "Gate 2/Gate 2A",
    mac: "00:1A:",
    ip: "192.168.0.1",
    last_synced: "3 mins ago ago ago ago ",
    temp: "2034°C",
    humidity: "1010112 gm^-3",
  },
  {
    id: 2,
    title: "Machine 2",
    content: "Content for Card 2",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 3,
    title: "Machine 3",
    content: "Content for Card 3",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B:3C",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 4,
    title: "Machine 4",
    content: "Content for Card 4",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 5,
    title: "Machine 5",
    content: "Content for Card 1",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 6,
    title: "Machine 6",
    content: "Content for Card 2",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 7,
    title: "Machine 7",
    content: "Content for Card 2",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 8,
    title: "Machine 8",
    content: "Content for Card 2",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 9,
    title: "Machine 9",
    content: "Content for Card 2",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },
  {
    id: 10,
    title: "Machine 10",
    content: "Content for Card 2",
    status: "off",
    location: "Gate 2A",
    mac: "00:1A:2B",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
    temp: "20°C",
    humidity: "10 gm^-3",
  },

  // Add more data as needed
];

const Machines = () => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [copiedItemId, setCopiedItemId] = useState<number | null>(null);
  const [ViewItemId, setViewItemId] = useState<number | null>(null);
  const entryWithId = data.find((item) => item.id === copiedItemId);
  const logId = data.find((item) => item.id === ViewItemId);
  const onStatusData = data.filter((item) => item.status === "on");
  const offStatusData = data.filter((item) => item.status === "off");


  let nameforid=""
  let locationforid=""
  if(logId)
  {
    console.log(logId)
  nameforid=logId.title;
  locationforid=logId.location;
  }
  let textToCopy = "";
  if (entryWithId) {
    const macForId = entryWithId.mac;
    textToCopy = macForId;
  } else {
    console.log(`No entry found with id ${entryWithId}`);
  }

  const handleCopyClick = (id: number) => {
    navigator.clipboard.writeText(textToCopy);
    setSnackbarOpen(true);
    setCopiedItemId(id);
  };

  const handleviewlogs = (id:number) =>{
    setViewItemId(id)
    

  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const renderMachineCard = (SectionData: typeof data) => (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {SectionData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} sx={{}}>
          <Card>
            <CardContent sx={{}} className="">
              <Grid
                container
                spacing={2}
                //   alignItems="center"
                className="flex flex-row "
              >
                <Grid
                  md={12}
                  sx={{ paddingLeft: 2, paddingTop: 2 }}
                  className=" flex flex-row "
                >
                  <Grid
                    item
                    sx={{ paddingBottom: 2, marginLeft: 2 }}
                    className=""
                  >
                    <AdfScannerIcon sx={{ height: 40, width: 40 }} />
                  </Grid>
                  <Grid item md={10} sx={{ marginLeft: 4 }} className="">
                    <Grid container md={12} className="flex flex-row ">
                      <Typography variant="body1" component="div">
                        {item.title}&nbsp;
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.location}
                      </Typography>
                    </Grid>
                    <Grid container className="" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="div"
                        sx={{ fontStyle: "italic" }}
                      >
                        Mac: {item.mac}
                        
                      </Typography>
                     
                      <Typography>
                        <IconButton onClick={() => handleCopyClick(item.id)}>
                          <ContentCopyIcon
                            color="primary"
                            sx={{ height: 15, width: 15, marginTop: "-4px" }}
                          />
                        </IconButton>
                      </Typography>
            
                      {/* <Typography variant="caption" className="" sx={{textAlign:"right"}}>
                        <DeviceThermostatIcon fontSize="small"/>
                        {item.temp}
                      </Typography> */}
                      
                    
                      
                    </Grid>
                    <Grid container md={9} >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="div"
                        sx={{ marginTop: "-8px" }}
                      >
                        {item.ip}
                      </Typography>
                      
                    </Grid>
                  </Grid>
                  <Typography className="">
                    <MachinesMenu/>
                  </Typography>
                </Grid>
                <Grid
                  md={12}
                  sx={{ paddingLeft: 2 ,marginBottom:-2}}
                  className=" flex flex-row "
                >
                  <Grid item sx={{ marginLeft: 1.5, marginTop: 3 }} className="">
                    <Typography variant="body2">
                      {item.status === "on" ? (
                        <>
                          <FiberManualRecordIcon style={{ color: "#4bd16f" }} />
                          {item.status}
                        </>
                      ) : (
                        <>
                          <WarningAmberIcon style={{ color: "red" }} />
                          {item.status}
                        </>
                      )}
                      
                    </Typography>
                   
                    
                  </Grid>
                  <Grid
                    item
                    sx={{ paddingLeft: 2, marginLeft: 2 }}
                    className=" "
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      component="div"
                      sx={{marginLeft:0.5}}
                    >
                      Synced  : {item.last_synced}
                    </Typography>
                    <Grid container  className=" flex flex-row">
                      <Grid  className="" sx={{paddingRight:1}} >
                    <Typography variant="caption" >
                        <DeviceThermostatIcon fontSize="small"/>
                        {item.temp}
                    </Typography>
                    </Grid>
                    <Grid  className="" >
                    <Typography variant="caption" >
                        <WaterDropIcon fontSize="small"/>
                        {item.humidity}
                    </Typography>
                    </Grid>
                    </Grid>
                   
                  </Grid>
                </Grid>

                
              </Grid>

            
            </CardContent>
            <CardActions  className=" " >
              <Typography onClick={()=>handleviewlogs(item.id)}>
              <Logs name={nameforid} subtitle={locationforid}  />
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {onStatusData.length !== 0 ? (
        <>
          <Typography variant="h5" sx={{ padding: 2 }}>
            On Status Machines
          </Typography>
          {renderMachineCard(onStatusData)}
        </>
      ) : null}

      {offStatusData.length !== 0 ? (
        <>
          <Typography variant="h5" sx={{ padding: 2 }}>
            Off Status Machines
          </Typography>
          {renderMachineCard(offStatusData)}
        </>
      ) : null}

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={`Copied to clipboard! (Mac : ${textToCopy})`}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <FileCopyIcon fontSize="small" />
          </IconButton>
        }
      />
    </Grid>
  );
};

export default Machines;
