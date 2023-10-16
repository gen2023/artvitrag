import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import routes from '../services/routes';

import '../css/pages/notFound.css';
import '../css/pages/mobileNotFound.css';

import textPageRu from "../json/ru/notFound.json";
import textPageEn from "../json/en/notFound.json";
import textPageUa from "../json/ua/notFound.json";

class NotFound extends Component {
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
    <div className="contentGeneral notFound">
      <div className="NFTitle">{list.title}</div>
        <div className="NFtext1">{list.text1}</div>
        <div className="NFtext2">{list.text2}</div>
        <Link to={routes.home}><span className="linkHome">{list.linkHome}</span></Link>
    </div>
  );
};

};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(NotFound)