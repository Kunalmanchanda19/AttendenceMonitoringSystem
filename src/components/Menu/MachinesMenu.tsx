import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import DeleteIcon from "@mui/icons-material/Delete";

import { Grid, Typography } from "@mui/material";

export default function MachinesMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="small" />
      </Typography>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Grid></Grid>
        <MenuItem onClick={handleClose}>
          {" "}
          <Typography variant="caption">
            <EditIcon fontSize="small" color="primary" />
          </Typography>{" "}
          &nbsp;Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Typography variant="caption">
            <DeleteIcon fontSize="small" color="error" />
          </Typography>{" "}
          &nbsp; Delete
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {" "}
          <Typography variant="caption">
            <InfoIcon fontSize="small" color="action" />
          </Typography>{" "}
          &nbsp; info
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Typography variant="caption">
            <HelpIcon fontSize="small" color="action" />
          </Typography>{" "}
          &nbsp; help
        </MenuItem>
      </Menu>
    </div>
  );
}
