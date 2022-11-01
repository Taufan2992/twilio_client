import React, {useState} from 'react'
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import adira from "../assets/images/adira.png"
import icon from "../assets/images/icon.png"
import ready from "../assets/images/ready.png"
import "../style.css"
import Buttonvid from '../partial/Buttonvid';

function VideoSurvey() {

  return (
    <>
    <div style={{backgroundColor:"#FAFAFA", height:'100vh'}}>
    <Container className='py-4'>
        <Row>
            <Col sm={6} md={6} className='align-item-center'>
                <Image src={adira}/>
                <p className='textDefault d-inline ms-3' style={{fontSize:35, fontWeight:300}}>SURVEY VIDEO</p>
            </Col>
            <Col sm={6} md={6} className='text-end'>
                <Row>
                    <Col sm={10}>
                        <p className='mb-0 mt-2'>Lucky Christopher Chen</p>
                        <p className='m-0'>Surveyor</p>
                    </Col>
                    <Col sm={2}>
                        <Image src={icon}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col sm={8}>
                <Image className="rounded-4" style={{objectFit:"cover", width:"100%"}} src='https://www.reseaucontact.com/blogue/wp-content/uploads/2017/04/5_conseils_pour_une_photo_de-profil_image_2-768x430.jpg'></Image>
            </Col>
            <Col sm={4}>
                <Card className="rounded-4 text-center">
                    <Card.Img variant="top" src={ready} className="px-5 py-4" />
                    <Card.Body>
                        <Card.Title className="textDefault py-4" style={{fontSize:30, fontWeight:800}}>Ready to join</Card.Title>
                        <Button variant="warning" className="container py-2" style={{fontSize:12}}>Join Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    <Buttonvid/>
    </div>
    </>
    
    // <div style={{backgroundColor:"#FAFAFA", height:"100vh", position:"relative"}}>
    //     <div className='container py-4 d-flex justify-content-between'>
    //         <div className='w-50'>
    //             <img className='pe-2' src={adira} alt="" />
    //             <h1 className='d-inline' style={{fontSize:"28px"}}>VIDEO SURVEY</h1>
    //         </div>
    //         <div className='w-50 d-flex justify-content-end'>
    //             <div className='text-end pt-2'>
    //                 <p className='mb-0'>Lucky Christopher Chen</p>
    //                 <p className='mb-0'>Surveyor</p>
    //             </div>
    //             <div className='ms-2'>
    //                 <img src={icon} alt="" />
    //             </div>
    //         </div>
    //     </div>
    //     <div className='row'>
    //         <div className='container col-8'>
    //             <div className='text-center' style={{paddingLeft:125}}>
    //                 <img className='rounded-4' height={400} width={700} style={{objectFit:"cover"}} src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" />
    //             </div>
    //         </div>

    //         <div className='col-4' style={{paddingRight:150}}>
    //             <div className='bg-white rounded-4 text-center' style={{height:400}}>
    //                 <div className='pt-5' >
    //                     <img src={ready} alt="" />
    //                 </div>
    //                 <div className='pt-5'>
    //                     <h2>Ready to Join?</h2>
    //                 </div>
    //                 <div className='px-3 pt-5'>
    //                     <button className='container btn btn-warning'>Join</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <Button />
    // </div>
  )
}

export default VideoSurvey