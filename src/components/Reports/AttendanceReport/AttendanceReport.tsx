import { MenuItem, TextField } from '@mui/material'
import React from 'react'

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

interface AttendanceReportsprops{

  Machines:Machine[]
}
const AttendanceReport:React.FC<AttendanceReportsprops> = ({Machines}) => {
  return (
    <div>
       <TextField
        
          select
          label="Machine"
          defaultValue={Machines[0].title}
          sx={{}}
        >
          {Machines.map((option) => (
            <MenuItem key={option.id} value={option.title}>
              {option.title} {option.location}
            </MenuItem>
          ))}
        </TextField>
    </div>
  )
}

export default AttendanceReport