import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
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
  { id: 4, label: "Custom", value: "cust" },
];
const AttendanceReport: React.FC<AttendanceReportsprops> = ({ Machines }) => {
  const handleDurationChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedDuration(event.target.value);
  };
  const handleMachineChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedMachine(event.target.value);
  };
  const [selectedDuration, setSelectedDuration] = React.useState(
    duration[0].value
  );
  const [selectedMachine, setSelectedMachine] = React.useState(
    Machines[0].title
  );

  useEffect(() => {
    // console.log(selectedDuration);
    // console.log(selectedMachine);
    return () => {};
  }, [selectedDuration, selectedMachine]);

  return (
    <Grid container spacing={2} className=" p-2">
      <Grid item xs={12} sm={4} md={4} lg={4} xl={2.5}>
        <TextField
          select
          label="Machine"
          defaultValue={Machines[0].title}
          sx={{}}
          onChange={handleMachineChange}
          fullWidth
        >
          {Machines.map((option) => (
            <MenuItem key={option.id} value={option.title}>
              {option.title} {option.location}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={1.5}>
        <TextField
          select
          label="Duration"
          value={selectedDuration}
          onChange={handleDurationChange}
          sx={{ width: "100%" }}
          fullWidth
        >
          {duration.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {selectedDuration === "cust" ? (
        <>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={3} sx={{ marginTop: -1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="From date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            lg={2}
            xl={3}
            className=""
            sx={{ marginTop: -1 }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="To date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            lg={2}
            xl={1.5}
            sx={{ marginTop: 1, paddingY: 2 }}
            className=""
          >
            <Button variant="contained" fullWidth sx={{}}>
              FETCH
            </Button>
          </Grid>
        </>
      ) : (
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          sx={{ marginTop: 1, paddingY: 2 }}
          className=""
        >
          <Button variant="contained" fullWidth sx={{}}>
            FETCH
          </Button>
        </Grid>
      )}

      <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
        <Typography variant="h6" color="text.secondary">
        Allowed : <span className="font-semibold text-black">24/30</span>
      </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4} className="p-2 text-right">
        <Button variant="outlined" sx={{}}>
          <FileDownloadOutlinedIcon/>
          Download
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={12}>
        <Box className="outline-dashed	 h-72"></Box>
      </Grid>
    </Grid>
  );
};

export default AttendanceReport;
