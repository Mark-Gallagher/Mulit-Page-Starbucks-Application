import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Overlay from "react-bootstrap/Overlay";
// import Popover from "react-bootstrap/Popover";

function RewardsCarousel(props) {
  // const [show, setShow] = useState(false);
  // const [target, setTarget] = useState(null);
  // const ref = useRef(null);
  
  
  // const handleClick = (event) => {
  //   setShow(!show);
  //   setTarget(event.target);
  // };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="./images/Carousel-Image-One"
                alt=""
              />
              <Carousel.Caption>
                <h3>Free food, drinks & more</h3>
                <p>
                  Redeem your Stars for favorites like a handcrafted cold brew,
                  protein box or even a coffee tumbler.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="./images/Carousel-Image-Two"
                alt=""
              />
              <Carousel.Caption>
                <h3>Complimentary birthday treat</h3>
                <p>
                  Every year on your birthday get a free drink or food item of
                  your choice.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel-Image-One"
                alt=""
              />
              <Carousel.Caption>
                <h3>Brewed coffee & tea refills on us</h3>
                <p>
                  More Caffè Verona® Blend, please. We’re happy to refill your
                  hot cup while you’re in the store. Just ask.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>ok</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}


function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Learn more
      </Button>

      <RewardsCarousel
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;


