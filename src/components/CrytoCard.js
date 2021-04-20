import { Card,Button,Row,Col } from 'react-bootstrap';
import { FaShareSquare } from 'react-icons/fa';

import { BsInfoSquare,BsArrowDown,BsArrowUp} from 'react-icons/bs';



export default function CryptoCard(props){

    return ( 
        
                <Row className="px-0 currency-card currency-border">
                    <Col lg={6}>
                        <span className="px-0 py-2">EURUSD</span>
                    </Col>
                    <Col lg={6}>
                         <BsInfoSquare size="18" className="my-auto mr-2 float-right h-100"/>
                        <FaShareSquare size="18" className="my-auto mr-1 float-right h-100"/>
                    </Col>
                    <Col lg={6} className={props.colorLeft+" left border-right py-3"}>
                        {
                            props.upOrDown == "down" && 
                            <BsArrowDown className="bg-dark  position-absolute" size="25" style={{ top:"18%",left:"100%" ,zIndex:"99999", transform: "translateX(-50%)"}} /> 
                        }
                        {
                            props.upOrDown == "up" && 
                            <BsArrowUp className="bg-dark  position-absolute" size="25" style={{ top:"18%",left:"100%" ,zIndex:"99999", transform: "translateX(-50%)"}} /> 
                        }
                        
                        <span>1.18133</span>
                        <span className="position-absolute" style={{ bottom:"0px", right:"5px" }}>Satış</span>
                        
                    </Col>
                    <Col lg={6} className={props.colorRight+" right border-left py-3"}>
                        <span className="float-right">1.18133</span>
                        <span className="position-absolute" style={{ bottom:"0px", left:"5px" }}>Alış</span>
                    </Col>
                    <Row className="w-100 mx-0  py-1 bottom-rows">
                        <Col lg={6} >
                            <span>Fark: 7</span>
                        </Col>
                        <Col lg={6}>
                            <span className="float-right">11.49.42:Tarih</span>
                        </Col>  
                    </Row>
                    <Row className="w-100 mx-0 py-1 bottom-rows currency-border">
                        <Col lg={6} className="">
                            <span>Düşük: 1.18015</span>
                        </Col>
                        <Col lg={6}>
                            <span className="float-right">1.18277:Yüksek</span>
                        </Col>
                    </Row>
                    
                </Row>
    )
}