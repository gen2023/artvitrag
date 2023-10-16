import React,{Component} from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/pages/about.css';
import '../css/pages/mobileAbout.css';

import routes from '../services/routes';

import textPageRu from "../json/ru/about.json";
import textPageEn from "../json/en/about.json";
import textPageUa from '../json/ua/about.json';

class About extends Component {
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
    <div className="contentGeneral aboutBackground">
      <div className="columnLeft contentAbout">
        <h1 style={{ textAlign: "center" }}>{list.heading}</h1>
        <div className="textAbout">{list.text1}</div>
          <div>
            {list.text2}
            {list.text2}
            <Link to={routes.myPhoto}>
              {list.linkMyPhoto}
            </Link>
            {list.text3}
            <Link to={routes.workPhoto}>
              {list.linkPhotoWork}
            </Link>
            {list.text4}
          </div>
      </div>
    </div>
  );
};
};

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(About)
