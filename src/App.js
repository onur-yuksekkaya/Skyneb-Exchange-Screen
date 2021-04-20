import "./App.css";
import CryptoCard from "./components/CrytoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid >
        <Row>
          <Col lg={4} style={{ backgroundColor: "#212D2B" }} >
            <Row>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="green" colorRight="green" upOrDown="up" /></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="gray" colorRight="green" upOrDown="down" /></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="red" upOrDown="down"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="green" upOrDown="up"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="gray" upOrDown="down"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="gray" colorRight="gray" upOrDown="up" /></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="gray" colorRight="gray" upOrDown="down"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="gray" colorRight="gray" upOrDown="up"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="red" upOrDown="up"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="gray" colorRight="gray" upOrDown="down"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="green" upOrDown="down"/></div>
              </Col>
              <Col lg={6}>
                <div className="p-1"><CryptoCard colorLeft="red" colorRight="gray" upOrDown="down"/></div>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <div className="w-100 bg-success" style={{ height: "65vh" }}>
              <div class="tradingview-widget-container">
                <div id="tradingview_eb355"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
              </div>
            </div>
            <table className="text-center mt-2" style={{width:'100%'}}>
              <tr>
                <th>Emir</th>
                <th>Zaman</th> 
                <th>Tur</th>
                <th>Miktar</th>
                <th>Sembol</th>
                <th>Fiyat</th>
                <th>KA</th>
                <th>Faiz</th>
                <th>Z/D</th>
                <th>K/Z</th>
                <th>Secenekler</th>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
              <tr>
                <td>13752</td>
                <td>2021-03-09 13:47:09</td>
                <td>BUY</td>
                <td>0.01</td>
                <td>EURUSD</td>
                <td>1.1893</td>
                <td>0</td>
                <td>0</td>
                <td>-0.93</td>
                <td>-7.97</td>
                <td>Duzenle/Kapat</td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
