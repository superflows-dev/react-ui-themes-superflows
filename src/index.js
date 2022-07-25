import React from 'react'
import styles from './styles.module.css'
import { Constants } from './constants';


function getTheme(name) {

  var theme;

  switch(name) {
    case Constants.DEFAULT:
    theme = {
      dangerColor: '#990000',
      dangerBackgroundColor: '#FFCCCC',
      dangerBorderColor: '#FFb3b3',
      successColor: '#006600',
      successBackgroundColor: '#d6f5d6',
      successBorderColor: '#b3ffb3',
      infoColor: '#4D4D4D',
      infoBackgroundColor: '#E9E9E9',
      infoBorderColor: '#DDDDDD',
      primaryButtonBackgroundColor: '#000000',
      primaryButtonColor: '#FFFFFF',
      linkButtonColor: '#000000',
      linkButtonBackgroundColor: 'transparent',
      tabTextColor: '#000000',
      tabBackgroundColor: '#ffffff',
      tabUnselectedTextColor: '#999999'
    }
    break;
  }

  return theme;

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
