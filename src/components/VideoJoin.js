import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import ss from "../assets/images/ss.png";
import maximize from "../assets/images/maximize.png";

function VideoJoin() {
  return (
    <div style={{ backgroundColor: "#FAFAFA", height: "100vh" }}>
      <Container className="py-4">
        <Row>
          <Col sm={8}>
            <Card className="p-4 rounded-4">
              <h3 className="mb-3">Credit Application Surver</h3>
              <Row>
                <Col sm={8}>
                  <Image
                    className="rounded-4"
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://img.freepik.com/free-photo/close-up-smiley-man-taking-selfie_23-2149155156.jpg?w=2000"
                  />
                </Col>
                <Col sm={4} style={{ position: "relative" }}>
                  <Image
                    className="rounded-4"
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://st.depositphotos.com/2413271/5050/i/950/depositphotos_50503825-stock-photo-handsome-man-taking-selfie.jpg"
                  />
                  <div
                    style={{ position: "absolute", right: 0, bottom: 0 }}
                    className="d-flex justify-content-end"
                  >
                    <span className=" p-2 rounded-circle" style={{backgroundColor:"#F1F5F9"}}>
                      <Image style={{width:30, height:30}} src={ss} />
                    </span>
                    <span className="p-2 rounded-circle" style={{backgroundColor:"#F1F5F9"}}>
                      <Image style={{width:30, height:30}} src={maximize} />
                    </span>
                  </div>
                  {/* <div className="d-inline text-end"><Image src={maximize}/></div> */}
                </Col>
              </Row>
            </Card>
            <Card className='rounded-4'>
              <Button>Test</Button>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Title>Chat</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoJoin;
