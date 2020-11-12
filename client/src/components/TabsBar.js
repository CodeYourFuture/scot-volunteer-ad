import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

function TabsBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: "#ff7a3dfd",
          marginTop: "2.5rem",
          borderRadius: "15%",
          border: "1px solid orange"
        }}
        className="wrapper"
        position="static"
      >
        <Tabs
          style={{ marginLeft: "5rem" }}
          className="tabs"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ marginRight: "10rem" }}
            className="tab"
            label="Topics"
            {...a11yProps(0)}
          />
          <Tab
            style={{ marginRight: "10rem" }}
            className="tab"
            label="Assessments"
            {...a11yProps(1)}
          />
          <Tab className="tab" label="Questions" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Topics1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Assessments1
      </TabPanel>
      <TabPanel value={value} index={2}>
        Questions1
      </TabPanel>
    </div>
  );
}
export default TabsBar;
