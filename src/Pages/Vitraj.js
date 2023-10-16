import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import routes from '../services/routes';

import '../css/pages/vitraj.css';
import '../css/pages/mobilevitraj.css';

import textPageRu from "../json/ru/vitraj.json";
import textPageEn from "../json/en/vitraj.json";
import textPageUa from "../json/ua/vitraj.json";

class Vitraj extends Component {
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
    <div className="contentGeneral vitrajBackground">
      <div className="columnLeft contentVitraj">
        <h1 style={{ textAlign: "center" }}>{list.heading}</h1>
        <div className="textVitraj">{list.text1}</div>
        <div className="textVitraj">{list.text2}</div>
        <div className="textVitraj">{list.text3}</div>
        <div className="textVitraj">{list.text4}</div>
        <div className="textVitraj">
          {list.text5}
          <Link to={routes.mk}>
            {list.linkMk}
          </Link>
          {list.text6}
        </div>
      </div>
    </div>
  );
};
};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Vitraj)