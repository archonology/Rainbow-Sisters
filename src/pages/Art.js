import React from "react";
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import plant from '../artwork/plant.JPG'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2, mt: 3 }}>
                    {children}
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Art = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container className="text-center p-4">
                <h2 className="heading"><span className="red">Art</span>work</h2>
                <hr></hr>

            </Container>

            <Box sx={{ width: '100%', marginTop: 0 }}>
                <Box>

                    <Tabs
                        sx={{ alignContent: "center" }}
                        // variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        centered
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable Dashboard List Tabs"
                        indicatorColor="secondary">
                        <Tab label="Jocelyn" {...a11yProps(0)} />
                        <Tab label="Willow" {...a11yProps(1)} />
                        <Tab label="Eliza" {...a11yProps(2)} />
                    </Tabs>

                </Box>

                <TabPanel value={value} index={0}>

                    <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} columns={{ xs: 12, sm: 12, md: 10, lg: 10 }} justifyContent="center">

                        <Grid item xs={10} sm={5} md={4} lg={3}>
                            <Image
                                src={plant}
                                alt={"pic goes here"}
                                fit="contain"
                                className="shadowy"
                            ></Image>
                        </Grid>

                        {/* <Grid item xs={10} sm={5} md={4} lg={3}>
                            <Image
                                src={plant}
                                alt={"pic goes here"}
                                fit="contain"
                            ></Image>
                        </Grid> */}

                    </Grid>


                </TabPanel>
                <TabPanel value={value} index={1}>





                </TabPanel>
                <TabPanel value={value} index={2}>



                </TabPanel>

            </Box>


        </>

    );
};

export default Art;
