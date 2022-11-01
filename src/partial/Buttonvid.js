import React, { useState } from "react";
import audio from "../assets/images/audio.png";
import video from "../assets/images/video.png";
import more from "../assets/images/more.png";
import { Container, Row, Col, Button } from "react-bootstrap";

function Buttonvid() {
  const [state, setState] = useState(false);

  const buttonHandler = () => {
    setState((current) => !current);
    console.log(state);
  };
  return (
    <Container style={{ position: "absolute", top: 420, left: 380 }}>
      <Row>
        <Col className="bg-white rounded-4 p-3 d-flex" sm={2}>
          <Button
            className="btn me-2 border-0"
            onClick={buttonHandler}
            style={
              state
                ? { backgroundColor: "#DDE7FF" }
                : { backgroundColor: "#f1ddcf" }
            }
          >
            <img
              src={audio}
              width={23}
              height={20}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Button>
          <Button
            className="btn me-2 border-0"
            onClick={buttonHandler}
            style={
              state
                ? { backgroundColor: "#DDE7FF" }
                : { backgroundColor: "#f1ddcf" }
            }
          >
            <img
              src={video}
              width={23}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Button>
          <Button
            className="btn border-0"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <img
              src={more}
              width={23}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Buttonvid;
