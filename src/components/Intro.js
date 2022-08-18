import { Col, Container, Row, Button } from "react-bootstrap"

const intro = () => {
    return (
        <div className="intro">
        <Container className="text-black text-center d-flex justify-content-center align-tems-center">
          <Row>
            <Col>
            <div className="judul">WELCOME</div>
            <div className="judul">TRAVELER</div>
            <div className="introButton mt-4 text-center ">
                <Button href="https://www.hoyolab.com/accountCenter/postList?id=27499703" target="blank" variant="primary">My HoyoLab</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>  
    )
}

export default intro