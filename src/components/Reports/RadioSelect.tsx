import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
import AppBackdrop from '../Appdrop/AppBackdrop';

// import AttendanceReport from './AttendanceReport/AttendanceReport';
// import MachineHealth from './MachineHealth/MachineHealth';


const AttendanceReport = React.lazy(()=>import('./AttendanceReport/AttendanceReport'))
const MachineHealth = React.lazy(()=>import('./MachineHealth/MachineHealth'))

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

interface radioSelectProps {
      MachinesData : Machine[]
}
const RadioSelect:React.FC<radioSelectProps> = ({MachinesData}) => {
    const [value, setValue] = React.useState('AttendanceReport');
    const [loading, setLoading] = React.useState(true);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
      setLoading(true);
      
    };

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Set the delay in milliseconds (2 seconds in this example)
  
      // Clear the timeout if the component unmounts or value changes
      return () => clearTimeout(timer);
    }, [value]);
  return (
    
        <Grid container className='justify-center content-center flex ' spacing={2} sx={{marginTop:3}}>
      {/* First row */}
     
      <Grid item xs={10} className="">
        <FormControl sx={{paddingX:1}}>
          <RadioGroup
            row
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="AttendanceReport" sx={{ color: "gray" }} control={<Radio />} label="Attendance report" />
            <FormControlLabel value="MachineHealth" sx={{ color: "gray" }} control={<Radio />} label="Machine Health" />
          </RadioGroup>
        </FormControl>
      </Grid>
      {/*  */}
      
      
      <Grid item xs={10} >
     
      {loading ? <AppBackdrop show={loading} /> :  (
      <React.Suspense fallback={<AppBackdrop show={loading} />}>
      {value === "AttendanceReport" ?  <AttendanceReport Machines={MachinesData} /> : value === "MachineHealth" ? <MachineHealth Machines={MachinesData} /> :null}
      </React.Suspense>
         )} 
           
      </Grid>
    </Grid>
        
  )
}

export default RadioSelect