import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
interface Machine {
  id: number;
  title: string;
  content: string;
  status: string;
  location: string;
  mac: string;
  ip: string;
  last_synced: string;
  temp: number;
  humidity: number;
}

interface AttendanceReportsprops {
  Machines: Machine[];
}

const duration = [
  { id: 1, label: "Last 24 hrs", value: "24hrs" },
  { id: 2, label: "Last 2 hrs", value: "2hrs" },
  { id: 3, label: "Last 7 days", value: "7days" },
];
const AttendanceReport: React.FC<AttendanceReportsprops> = ({ Machines }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
        <TextField
          select
          label="Machine"
          defaultValue={Machines[0].title}
          sx={{}}
          fullWidth
        >
          {Machines.map((option) => (
            <MenuItem key={option.id} value={option.title}>
              {option.title} {option.location}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
        <TextField
          select
          label="Duration"
          defaultValue={duration[0].label}
          sx={{ width: "100%" }}
          fullWidth
        >
          {duration.map((option) => (
            <MenuItem key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        sx={{ padding: 2, marginY: 1 }}
        className=""
      >
        <Button variant="contained" fullWidth sx={{padding:1}}>
          FETCH
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
        <Typography variant="h6" color="text.secondary">
          Allowed : <span className="font-semibold text-black">24/30</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4} className="p-2 text-right">
      <Button variant="outlined" sx={{}}><FileDownloadOutlinedIcon/>Download</Button>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={12}>

            <Box className="outline-dashed	 h-72"></Box>

      </Grid>

    </Grid>
  );
};

export default AttendanceReport;
