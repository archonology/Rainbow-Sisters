import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'mui-image';
import { Avatar, Stack, Grid, Box } from "@mui/material";
import rainbowsisters from '../artwork/rainbowsisters.jpeg'


const About = () => {
    return (
        <>
            <Container className="p-4">
                <h2 className="heading text-center"><span className="red">A</span>bout</h2>
                <hr></hr>
            </Container>

            <section className='container d-flex flex-wrap'>
                <div className='row justify-content-center m-4 mt-0'>
                    <div className='col-12 col-md-6 col-lg-4 m-1 mt-0'>
                        <Image
                            src={rainbowsisters}
                            alt={"pic goes here"}
                            fit="contain"
                        ></Image>

                    </div>
                    <div className='col-12 col-md-5 col-lg-6 m-1'>
                        <p>
Three awesome sisters.
                        </p>

                    </div>
                </div>
            </section>



        </>

    );
};

export default About;
