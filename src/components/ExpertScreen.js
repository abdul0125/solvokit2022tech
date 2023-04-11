import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AskExpertFeed,
  ExpertScreenAssignment,
  ExpertScreenExpert,
  ExpertScreenProject,
} from "./component/ExpertScreenComponent";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ExpertScreen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ask Expert" {...a11yProps(0)} />
          <Tab label="Expert Help" {...a11yProps(1)} />
          <Tab label="Assignment Help" {...a11yProps(2)} />
          <Tab label="Project Help" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <AskExpertFeed/>       
            
          </Grid>
          <Grid item>
            <AskExpertFeed/>       
            
          </Grid>
          <Grid item>
            <AskExpertFeed/>       
            
          </Grid>
          <Grid item>
            <AskExpertFeed/>       
            
          </Grid>
          <Grid item>
            <AskExpertFeed/>       
            
          </Grid>
          </Grid >

     
       
              
       
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Grid container spacing={3}>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
          <Grid item>
            <ExpertScreenExpert />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Grid container spacing={3}>
          <Grid item>
            <ExpertScreenAssignment />
          </Grid>
          <Grid item>
            <ExpertScreenAssignment />
          </Grid>
          <Grid item>
            <ExpertScreenAssignment />
          </Grid>
          <Grid item>
            <ExpertScreenAssignment />
          </Grid>
          <Grid item>
            <ExpertScreenAssignment />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Grid container spacing={3}>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
          <Grid item>
            <ExpertScreenProject />
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}

// import React from 'react';
// import ExpertScreenComponent from './component/ExpertScreenComponent';

// const ExpertScreen = () => {
//   return (
//     <div style={{backgroundColor:'gray'}}>

//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//         <ExpertScreenComponent/>
//     </div>
//   )
// }

// export default ExpertScreen
