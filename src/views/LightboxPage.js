import React from "react";
import back from "../assets/icons/back.svg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../theme/Lightbox/Lightbox.css";
import Nav from "../components/molecules/Nav/Nav";
import "bootstrap-css-only/css/bootstrap.css";
import img1 from "../assets/Gallery/img1.jpg";
import img2 from "../assets/Gallery/img2.jpg";
import img3 from "../assets/Gallery/img3.jpg";
import img4 from "../assets/Gallery/img4.jpg";
import img5 from "../assets/Gallery/img5.jpg";
import img6 from "../assets/Gallery/img6.jpg";
import img7 from "../assets/Gallery/img7.jpg";
import img8 from "../assets/Gallery/img8.jpg";
import img9 from "../assets/Gallery/img9.jpg";
import img10 from "../assets/Gallery/img10.jpg";
import img11 from "../assets/Gallery/img11.jpg";
import img12 from "../assets/Gallery/img12.jpg";
import img13 from "../assets/Gallery/img13.jpg";
import img14 from "../assets/Gallery/img14.jpg";
import img15 from "../assets/Gallery/img15.jpg";
import img16 from "../assets/Gallery/img16.jpg";
import img17 from "../assets/Gallery/img17.jpg";
import img18 from "../assets/Gallery/img18.jpg";
import img19 from "../assets/Gallery/img19.jpg";
import img20 from "../assets/Gallery/img20.jpg";
import img21 from "../assets/Gallery/img21.jpg";
import img22 from "../assets/Gallery/img22.jpg";
import img23 from "../assets/Gallery/img23.jpg";
import img24 from "../assets/Gallery/img24.jpg";
import img25 from "../assets/Gallery/img25.jpg";
import img26 from "../assets/Gallery/img26.jpg";
import img27 from "../assets/Gallery/img27.jpg";
import img28 from "../assets/Gallery/img28.jpg";
import img29 from "../assets/Gallery/img29.jpg";
import img30 from "../assets/Gallery/img30.jpg";
import img31 from "../assets/Gallery/img31.jpg";

import img1s from "../assets/Gallery/img1s.jpg";
import img2s from "../assets/Gallery/img2s.jpg";
import img3s from "../assets/Gallery/img3s.jpg";
import img4s from "../assets/Gallery/img4s.jpg";
import img5s from "../assets/Gallery/img5s.jpg";
import img6s from "../assets/Gallery/img6s.jpg";
import img7s from "../assets/Gallery/img7s.jpg";
import img8s from "../assets/Gallery/img8s.jpg";
import img9s from "../assets/Gallery/img9s.jpg";
import img10s from "../assets/Gallery/img10s.jpg";
import img11s from "../assets/Gallery/img11s.jpg";
import img12s from "../assets/Gallery/img12s.jpg";
import img13s from "../assets/Gallery/img13s.jpg";
import img14s from "../assets/Gallery/img14s.jpg";
import img15s from "../assets/Gallery/img15s.jpg";
import img16s from "../assets/Gallery/img16s.jpg";
import img17s from "../assets/Gallery/img17s.jpg";
import img18s from "../assets/Gallery/img18s.jpg";
import img19s from "../assets/Gallery/img19s.jpg";
import img20s from "../assets/Gallery/img20s.jpg";
import img21s from "../assets/Gallery/img21s.jpg";
import img22s from "../assets/Gallery/img22s.jpg";
import img23s from "../assets/Gallery/img23s.jpg";
import img24s from "../assets/Gallery/img24s.jpg";
import img25s from "../assets/Gallery/img25s.jpg";
import img26s from "../assets/Gallery/img26s.jpg";
import img27s from "../assets/Gallery/img27s.jpg";
import img28s from "../assets/Gallery/img28s.jpg";
import img29s from "../assets/Gallery/img29s.jpg";
import img30s from "../assets/Gallery/img30s.jpg";
import img31s from "../assets/Gallery/img31s.jpg";
import ButtonBack from "../components/atoms/ButtonBack/ButtonBack";

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    back: false,
    isOpen: false,
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
      img10,
      img11,
      img12,
      img25,
      img26,
      img27,
      img28,
      img29,
      img30,
      img31
    ],

    small: [
      img1s,
      img2s,
      img3s,
      img4s,
      img5s,
      img6s,
      img7s,
      img8s,
      img9s,
      img13s,
      img14s,
      img15s,
      img16s,
      img17s,
      img18s,
      img19s,
      img20s,
      img21s,
      img22s,
      img23s,
      img24s,
      img10s,
      img11s,
      img12s,
      img25s,
      img26s,
      img27s,
      img28s,
      img29s,
      img30s,
      img31s
    ]
  };

  renderImages = () => {
    let photoIndex = -1;
    const { small } = this.state;
    return small.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="3" key={photoIndex}>
          <figure className="figure">
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
  };

  getWindowHeight = () => {
    if (window.pageYOffset > 700) {
      this.setState({
        back: true
      });
    } else {
      this.setState({
        back: false
      });
    }
  };

  handleScrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  componentDidMount() {
    window.addEventListener("scroll", this.getWindowHeight);
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <>
        <Nav />
        <MDBContainer className="mt-5">
          <h2 className="font-weight-bold my-5 text-center">Nasze Wypieki</h2>
          <div className="mdb-lightbox">
            <MDBRow>{this.renderImages()}</MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
        {this.state.back ? (
          <ButtonBack onClick={this.handleScrollTop} icon={back} />
        ) : null}
      </>
    );
  }
}

export default LightboxPage;
