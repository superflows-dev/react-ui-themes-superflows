import React from 'react'
import styles from './styles.module.css'
import { Constants } from './constants';


function getTheme(name) {

  var theme;

  switch(name) {
    case Constants.DEFAULT:
    theme = {
      dangerDarkColor: '#CC3300',
      dangerLightColor: '#FFD9CC',
      successDarkColor: '#009900',
      successLightColor: '#E6FFE6',
      infoDarkColor: '#4D4D4D',
      infoLightColor: '#D9D9D9',
      primaryButtonDarkColor: '#7300E6',
      primaryButtonLightColor: '#FFFFFF',
      linkButtonDarkColor: '#000000',
      linkButtonLightColor: 'transparent'
    }
    break;
  }

  return theme;

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
