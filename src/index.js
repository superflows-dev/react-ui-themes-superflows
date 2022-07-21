import React from 'react'
import styles from './styles.module.css'
import { Constants } from './constants';


function getTheme(name) {

  var theme;

  switch(name) {
    case Constants.DEFAULT:
    theme = {
      dangerBackgroundColor: '#CC3300',
      dangerColor: '#FFD9CC',
      dangerBorderColor: '#CFA98C',
      successBackgroubndColor: '#009900',
      successColor: '#E6FFE6',
      successBorderColor: '#A6AFA6',
      infoBackgroundColor: '#4D4D4D',
      infoColor: '#D9D9D9',
      infoBorderColor: '#999999',
      primaryButtonBackgroundColor: '#7300E6',
      primaryButtonColor: '#FFFFFF',
      linkButtonBackgroundColor: '#000000',
      linkButtonColor: 'transparent'
    }
    break;
  }

  return theme;

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
