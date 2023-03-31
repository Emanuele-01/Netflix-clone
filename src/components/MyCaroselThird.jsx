import { Component } from "react";
import { Carousel, Row, Col, Spinner } from 'react-bootstrap'


class MyCaroselThird extends Component {
    state = {
        Lungometraggio: [],
        Lungometraggio2: [],
        Lungometraggio3: [],
        isLoading: true
    };

    async componentDidMount() {
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=Modern+Family")

            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio: data.Search });
                this.setState({isLoading: false})
            } else {
                console.log("error");
                this.setState({isLoading: false})
            }
        } catch (error) {
            alert(error);
            this.setState({isLoading: false})
        }
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=Friends")

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
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=griffin")

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
                        {this.state.isLoading && !this.state.error && (
                            <Spinner animation="border" role="status" className="text-light">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )}
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio.map((pippo) => (
                                <Col key={pippo.imdbID}>
                                    <img width='140px' src={pippo.Poster} alt={pippo.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio2.map((pippo1) => (
                                <Col key={pippo1.imdbID}>
                                    <img width='140px' src={pippo1.Poster} alt={pippo1.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                            {this.state.Lungometraggio3.map((pippo3) => (
                                <Col key={pippo3.imdbID}>
                                    <img width='140px' src={pippo3.Poster} alt={pippo3.Title} />
                                </Col>
                            ))}

                        </Row>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default MyCaroselThird;