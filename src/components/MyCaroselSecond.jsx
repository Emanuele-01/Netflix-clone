import { Component } from "react";
import { Carousel, Row, Col } from 'react-bootstrap'


class MyCaroselSecond extends Component {
    state = {
        Lungometraggio: [],
        Lungometraggio2: [],
        Lungometraggio3: []
    };

    async componentDidMount() {
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=suits")

            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=NCIS")

            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio2: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=Law+%26+Order")

            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio3: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <>
                <Carousel className="mb-5">
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio.map((pippo) => (
                                <Col key={pippo.imdbID}>
                                    <img width='150px' src={pippo.Poster} alt={pippo.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio2.map((pippo1) => (
                                <Col key={pippo1.imdbID}>
                                    <img width='150px' src={pippo1.Poster} alt={pippo1.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio3.map((pippo3) => (
                                <Col key={pippo3.imdbID}>
                                    <img width='150px' src={pippo3.Poster} alt={pippo3.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default MyCaroselSecond;