import React, { Component } from 'react';
import {connect} from 'react-redux';

import textPageRu from '../../json/ru/galleryImageObject.json';
import textPageEn from '../../json/en/galleryImageObject.json';
import textPageUa from '../../json/ua/galleryImageObject.json';
import './imageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  
// const ImageGallery = ({ images, onClick,size }) => {
  funcLanguage() {
    const {language } = this.props;

    switch(language){
      case "Ru": 
        return textPageRu;
      
      case "Ua": 
        return textPageUa;
      
      case "En": 
        return textPageEn;
      
      default:
        return textPageUa;
      
    }
 }

  render() {
   const {images, onClick}=this.props;
    const list=this.funcLanguage();
    // console.log(list)
  return (
    <>
    <h1>{list.category}</h1>
    <ul className="ImagesGallery">
      {images.map(({ large,small,name,size }) => (
        <ImageGalleryItem
          key={name}
          name={name}
          large={large}
          small={small}
          size={size}          
          onClick={onClick}
        />
      ))}
    </ul>
    </>
  );
};
}

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(ImageGallery)