import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'

interface HeaderbarProps {
  name:string
}

const HeaderBar:React.FC<HeaderbarProps> = ({name}) => {
  return (
    <Grid
          data-testid="fc-header-panel"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="header-panel"
          sx={{ padding: 2, background: '#EAEAEA' }}
        >
          <Grid item xs={12}  >
            <Typography variant="h5" align='center' sx={{ }} >
              {/* {title} */}
              {name}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            {/* {!!HeaderComponent && <HeaderComponent />} */}
          </Grid>
        </Grid>
  )
}

export default HeaderBar