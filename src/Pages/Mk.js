import React,{Component} from "react";
import {connect} from 'react-redux';

import ModalMk from '../components/Modal/ModalMk'

import '../css/pages/mk.css';
import '../css/pages/mobileMk.css';

import textPageRu from "../json/ru/mkDescription.json";
import textPageEn from "../json/en/mkDescription.json";
import textPageUa from "../json/ua/mkDescription.json";
import textGeneralRu from "../json/ru/mk.json";
import textGeneralEn from "../json/en/mk.json";
import textGeneralUa from "../json/ua/mk.json";

class Mk extends Component {
  funcLanguage() {
    const {language } = this.props;
    switch(language){
      case "Ru": 
        return Object.assign(
          textPageRu.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
          textGeneralRu
          );
      
      case "Ua": 
        return Object.assign(
          textPageUa.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
          textGeneralUa
        );
      
      case "En": 
        return Object.assign(
          textPageEn.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
          textGeneralEn
        );
      
      default:
        return Object.assign(
          textPageUa.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
          textGeneralUa
        );
      
    }

 }
  render() {
    const list=this.funcLanguage();

  return (
    <div className="contentGeneral mkBackground">
        <div className="columnLeft contentMk">
          <h1 className="MkHeading">{list.heading}</h1>
          <ul>
            {list.map(({ 
              id, 
              name, 
              descripnion,
              time, 
              descTime, 
              features, 
              descFeatures1, 
              descFeatures2, 
              costMk, 
              descCostMk1, 
              descCostMk2, 
              descCostMk3, 
              descCostMk4
            }) => (
              <div className="textMk">
              <div className="textMkHover"><span className="nameMk">{name}</span></div>
                <div className="mkDescription">        
                  <ModalMk 
                    key={id} 
                    name={name} 
                    descripnion={descripnion}
                    time={time}
                    descTime={descTime}
                    features={features}
                    descFeatures1={descFeatures1}
                    descFeatures2={descFeatures2}
                    costMk={costMk}
                    descCostMk1={descCostMk1}
                    descCostMk2={descCostMk2}
                    descCostMk3={descCostMk3}
                    descCostMk4={descCostMk4} />              
                </div>
              </div>
            ))}
          </ul>
       </div>
    </div>
  );
};
};

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Mk)
