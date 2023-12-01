import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Examination() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Setting Question Paper" {...a11yProps(0)} />
          <Tab label="Date Scheduling" {...a11yProps(1)} />
          <Tab label="Question Papers" {...a11yProps(2)} />
          <Tab label="Previous Question Paper" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      setting question paper.............
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Date scheduling respective to teacheres............
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Question papers............
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Previous years question paper......................
      </CustomTabPanel>
    </div>
  );
}

export default Examination;
