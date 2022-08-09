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
      tabColor: '#000000',
      tabBackgroundColor: '#ffffff',
      tabUnselectedColor: '#999999',
      uploadToS3BorderColor: 'transparent',
      uploadToS3BackgroundColor: 'transparent',
      uploadToS3TitleColor: 'transparent',
      uploadToS3SubtitleColor: 'transparent',
      uploadToS3ChooseColor: 'white',
      uploadToS3ChooseBackgroundColor: 'black',
      uploadToS3CancelColor: 'black',
      uploadToS3CancelBackgroundColor: '#efefef',
      uploadToS3UploadColor: 'white',
      uploadToS3UploadBackgroundColor: 'black',
    }
    break;
  }

  return theme;

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
