import React,{Component} from 'react';
import {connect} from 'react-redux';

import '../css/pages/home.css';
import '../css/pages/mobileHome.css';

import textPageRu from '../json/ru/home.json';
import textPageEn from '../json/en/home.json';
import textPageUa from '../json/ua/home.json';

class Home extends Component {
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
    <div className="homeBackground">
      <div className="columnLeft contentHome">
        <div className="contentHomeTitle">{list.title}</div>
        <div className="contentHomeAuthor">{list.author}</div>
      </div>
    </div>
  );
};
};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Home)