import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import '../theme/Lightbox/Lightbox.css';
import Nav from '../components/molecules/Nav/Nav';
import 'bootstrap-css-only/css/bootstrap.css';
import img1 from '../assets/Gallery/img1.jpg'
import img2 from '../assets/Gallery/img2.jpg'
import img3 from '../assets/Gallery/img3.jpg'
import img4 from '../assets/Gallery/img4.jpg'
import img5 from '../assets/Gallery/img5.jpg'
import img6 from '../assets/Gallery/img6.jpg'
import img7 from '../assets/Gallery/img7.jpg'
import img8 from '../assets/Gallery/img8.jpg'
import img9 from '../assets/Gallery/img9.jpg'
import img10 from '../assets/Gallery/img10.jpg'
import img11 from '../assets/Gallery/img11.jpg'
import img12 from '../assets/Gallery/img12.jpg'
import img13 from '../assets/Gallery/img13.jpg'
import img14 from '../assets/Gallery/img14.jpg'
import img15 from '../assets/Gallery/img15.jpg'
import img16 from '../assets/Gallery/img16.jpg'
import img17 from '../assets/Gallery/img17.jpg'
import img18 from '../assets/Gallery/img18.jpg'





class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
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
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (

    <MDBContainer className="mt-5">
    <Nav black/>
        <h2 className="font-weight-bold my-5 text-center">Nasze Wypieki</h2>
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
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

    );
  }
}

export default LightboxPage;