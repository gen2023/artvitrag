import React,{Component} from 'react';
import {connect} from 'react-redux';

import '../css/pages/contact.css';
import '../css/pages/mobileContact.css';

import textPageRu from '../json/ru/contact.json';
import textPageEn from '../json/en/contact.json';
import textPageUa from '../json/ua/contact.json';

  class Contact extends Component {
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
    const list=this.funcLanguage();
  return (
    <div className="contentGeneral contactBackground">
      <div className="columnLeft contentContact">
        <h1 style={{ textAlign: 'center' }}>{list.heading}</h1>
        <div className="textAbout">{list.text1}</div>
        <div className="textAbout">
          <a href="https://www.facebook.com/artvitrag2100/">{list.text2}</a>
        </div>
        <div className="textAbout">{list.text3}</div>
        <div className="textAbout">{list.text4}</div>
        <div className="textAbout">{list.tel1}</div>
        <div className="textAbout">{list.tel2}</div>
        <div className="textAbout">{list.email}</div>
      </div>
    </div>
  );
};

};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Contact)