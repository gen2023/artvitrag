import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';

import textPageRu from '../../json/ru/galleryImageObject.json';
import textPageEn from '../../json/en/galleryImageObject.json';
import textPageUa from '../../json/ua/galleryImageObject.json';

import GalleryCategoryItem from './GalleryCategoryItem';

import './GalleryCategory.css';

class GalleryCategory extends Component {
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
   randomImage(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
 }
  language() {}
  render() {
    const list=this.funcLanguage();
    // const test=testRu;
    // console.log(list.map(cat=>cat.image.map(img=>img.small)));
    // console.log(test);
    return (
      <Fragment>        
        <nav className="listCategoryGallery">
          <ul className="galleryCategory">
            {list.map(
              ({ id, category,image }) => (
                <GalleryCategoryItem
                  key={id}
                  categoryName={category}
                  picture={this.randomImage(image.map(img=>img.small))}
                  link={`gallery/${id}`}
                />
              ),
            )}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(GalleryCategory)