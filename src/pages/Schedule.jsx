import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle, CardText, Row, Col} from 'reactstrap';


const Schedule = () => {

    const [posts, setPosts] = useState([])


    useEffect(()=>{
        const fetchData = async ()=>{
            try{

                const res = await axios.get("/inters/inters")
                setPosts(res.data);

            }catch(err){
                console.log(err)}
        };
        fetchData();

    },[]);

    return (
        <div className="home" style={{

        }}>
            <>
            <Navbar/>
            </>
            
            <div className='container fluid justify-content-center text-center' style={{
                width: 700,
                marginTop: 10,
                marginBottom: 10
            }}>
                <Row xs={1} md={3} style={{
                    marginTop: 10,
                }}>
                    {posts.map((inters)=>(
                        <Col>
                            <Card className='m-2 p-1 border rounded' key={inters._id} style={{
                                width: "220px"
                            }}>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {inters.name}
                                    </CardTitle>
                                    <CardText>
                                        {inters.email}
                                    </CardText>
                                    <Button href= {`/pdf/${inters._id}`} style={{
                                        background: "#0c5aa9"
                                    }}>
                                        Cronograma
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}

export default Schedule;