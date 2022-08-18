import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import JadeCutterImage from "../assets/foto/JadeCutter.jpg"
import Mistsplitter1Image from "../assets/foto/Mistsplitter1.png"

const Weapon = () => {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Senjata">FAVOURITE WEAPON</h1>
            <Row>
                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={JadeCutterImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Jade Cutter</Card.Title>
                                <Card.Text className='text-left'>
                                Primordial Jade Cutter (Chinese: 磐岩结绿 Pányán Jiélǜ, "Gathering Greenery on Monolith") 
                                is a Liyue sword. It was originally forged by Rex Lapis.
                                A ceremonial sword masterfully carved from pure jade. 
                                There almost seems to be an audible sigh in the wind as it is swung.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Type: Sword 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={Mistsplitter1Image} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Mistsplitter</Card.Title>
                                <Card.Text className='text-left'>
                                Mistsplitter Reforged (Japanese: 霧切の廻光 Kirigiri no Kaikou) is an Inazuman sword.
                                A sword that blazes with a fierce violet light. The name "Reforged" 
                                comes from it having been broken once before.
                                One of the swords that the Shogun bestowed upon her Hatamoto.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Type: Sword 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>  
    )
}

export default Weapon
