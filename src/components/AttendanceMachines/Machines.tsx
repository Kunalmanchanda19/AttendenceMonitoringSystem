import { Card, CardContent, Grid, Typography } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const data = [
  {
    id: 1,
    title: "Machine 1",
    content: "Content for Card 1",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },
  {
    id: 2,
    title: "Machine 2",
    content: "Content for Card 2",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },
  {
    id: 3,
    title: "Machine 3",
    content: "Content for Card 3",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },
  {
    id: 4,
    title: "Machine 4",
    content: "Content for Card 4",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },
  {
    id: 5,
    title: "Machine 1",
    content: "Content for Card 1",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },
  {
    id: 6,
    title: "Machine 2",
    content: "Content for Card 2",
    status: "on",
    location: "Gate 2A",
    mac: "00:1A:2B:3C:4D:5E",
    ip: "192.168.0.1",
    last_synced: "3 mins ago",
  },

  // Add more data as needed
];

const Machines = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {data.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={3} sx={{}}>
          <Card>
            <CardContent sx={{ padding: 2 }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                className="flex flex-row"
              >
                <Grid item md={3} sx={{ padding: 2 }}>
                  <FingerprintIcon sx={{ height: 40, width: 40 }} />
                  <Typography variant="h6" component="div">
                    {/* {item.status} */}
                  </Typography>
                </Grid>

                <Grid container md={9}>
                  <Grid container md={9} className="flex flex-row">
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
                  <Grid container md={9} className="">
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      component="div"
                      sx={{ fontStyle: "italic" }}
                    >
                      Mac: {item.mac}
                    </Typography>
                    <Typography>
                      &nbsp;{" "}
                      <ContentCopyIcon
                        color="primary"
                        sx={{ height: 15, width: 15, marginTop: "-4px" }}
                      />
                    </Typography>
                  </Grid>
                  <Grid container md={9}>
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

                <Grid item md={3}>
                  <Typography variant="body2">{item.status}</Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    sx={{ fontStyle: "italic" }}
                  >
                    Synced : {item.last_synced} &nbsp;
                    <Typography variant="caption" color="text.secondary">
                    view logs
              </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="body2" color="text.secondary">
                {}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Machines;
