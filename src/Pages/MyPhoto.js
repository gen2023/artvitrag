import React, {Component} from "react";
import {connect} from 'react-redux';

import Photo from '../components/Photo';
// import Modal from '../components/Modal/ModalImage';

import textPageRu from '../json/ru/myPhoto.json';
import textPageEn from '../json/en/myPhoto.json';
import textPageUa from '../json/ua/myPhoto.json';
import textGeneralRu from '../json/ru/general.json';
import textGeneralEn from '../json/en/general.json';
import textGeneralUa from '../json/ua/general.json';
import imagePage from '../json/pages/myPhotoImage.json';

class MyPhoto extends Component {

  funcLanguage() {
    const {language } = this.props;
    switch(language){
      case "Ru": 
        return Object.assign(textPageRu,textGeneralRu);
      
      case "Ua": 
      return Object.assign(textPageUa,textGeneralUa);
      
      case "En": 
        return Object.assign(textPageEn,textGeneralEn);
      
      default:{
        return Object.assign(textPageUa,textGeneralUa);
      }
    }
  }

  render() {
  
    return (
    <>
      <Photo text={this.funcLanguage()} images={imagePage} />;
    </>
    )
  }
}

const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(MyPhoto)