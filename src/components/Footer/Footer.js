import React from 'react';
import './Footer.scss';
import Font from '../../Assets/BFTinyHand-Regular.otf';
import html2canvas from 'html2canvas';
import htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';




const Footer = () => {
  const downloadFont = () => {
    window.location = Font
  }
  const downloadPoster = (e) => {
    htmlToImage.toBlob(document.getElementById('capture'))
    .then(blob => {
      window.saveAs(blob, 'FinalWord.png')
    })

  }
  return (
    <footer className='footer'>
      <button className='download font capitalized' onClick={downloadFont}>
        Download Font
      </button>
      <button className='download picture capitalized' onClick={downloadPoster}>
        Download Poster
      </button>
    </footer>
  )
}
export default Footer;
