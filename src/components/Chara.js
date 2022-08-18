import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import Ganyu1Image from "../assets/foto/Ganyu1.jpeg"
import AyakaImage from "../assets/foto/Ayaka.jpg"
import Ei2Image from "../assets/foto/Ei2.jpg"
import Yaemiko1Image from "../assets/foto/Yaemiko1.jpeg"
import Lumine1Image from "../assets/foto/Lumine1.jpg"

const Chara = () => {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Character">FAVOURITE CHARACTER</h1>
            <Row>
                <Col md={4} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={Ganyu1Image} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>GANYU</Card.Title>
                                <Card.Text className='text-left'>
                                Ganyu (Chinese: 甘雨 Gānyǔ) is a playable Cryo character in Genshin Impact.
                                She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as 
                                the general secretary of the Liyue Qixing.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Element: Cryo
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={AyakaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>KAMISATO AYAKA</Card.Title>
                                <Card.Text className='text-left'>
                                She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. 
                                Being beautiful, elegant, and graceful, the common folk have nothing to bad-mouth Ayaka about. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Element: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={Ei2Image} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>RAIDEN SHOUGUN</Card.Title>
                                <Card.Text className='text-left'>
                                The Raiden Shogun (Japanese: 雷電将軍 Raiden Shougun) is a playable Electro character in Genshin Impact.
                                As the Shogun, she is the vessel of Beelzebul, the current Electro Archon of Inazuma.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Element: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={Yaemiko1Image} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Yae Miko</Card.Title>
                                <Card.Text className='text-left'>
                                Yae Miko (Japanese: 八重神子 Yae Miko), also known as Guuji Yae (Japanese: 宮司 Guuji) or the Guuji, 
                                is a playable Electro character in Genshin Impact.
                                Miko oversees the Grand Narukami Shrine and is the owner of the Yae Publishing House.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Element: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={Lumine1Image} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Lumine</Card.Title>
                                <Card.Text className='text-left'>
                                Lumine is the playable protagonist of Genshin Impact. 
                                She Is from another world travel through the universe, 
                                until an unknown god blocks her path. She save Paimon by fishing her  
                                and she accompanies her as her new travel companion.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Element: Unknown 
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

export default Chara
