import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import ImageGallery from '../components/ImageGallery';

import '../css/pages/galleryImage.css';

import textPageRu from '../json/ru/galleryImageObject.json';
import textPageEn from '../json/en/galleryImageObject.json';
import textGeneralRu from '../json/ru/general.json';
import textGeneralEn from '../json/en/general.json';

import routes from '../services/routes';

class GalleryImage extends Component {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){    
    //  console.log(textPageRu.filter(cat=>cat.id===this.props.match.params.galleryId).map(img=>img.image));
    return Object.assign(
      textPageRu.filter(cat=>cat.id===this.props.match.params.galleryId),
      textGeneralRu
      );
  }
  else
  {
    return Object.assign(
      textPageEn.filter(cat=>cat.id===this.props.match.params.galleryId),
      textGeneralEn
      );
  };
 }
  state = {
    // images: this.funcLanguage().map(img=>img.image),
    name:null,
    size:null,
    isModal: false,
    currentImage: null,
  };

  toggleModal = (image,size,name) => {
    
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentImage: prevState.isModal ? null : image,
      size:size,
      name:name,
    }));
  };

  handleImageClick = (image,size,name) => {
    
    this.toggleModal(image,size,name);
  };


  
  render() {
    const { isModal, currentImage, size, name } = this.state;
    const  images = this.funcLanguage().map(img=>img.image);
    // console.log(images);
    // console.log(history.push(location?.state?.from));
    const list=this.funcLanguage();
    // console.log(list);
    return (<> <br /> <br /> <br /> <br /> <br />
    {isModal && <Modal image={currentImage} size={size} name={name} onToggle={this.toggleModal} />}
    <Link to={routes.gallery}>
        <span>{list.go_back}</span>
    </Link>
    <h1>{list[0].category}</h1>
    <ImageGallery images={images[0]} onClick={this.handleImageClick} />
    
</>
    );
  }
}
// export default GalleryImage;
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(GalleryImage)