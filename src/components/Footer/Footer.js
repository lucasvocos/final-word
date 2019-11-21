import React from 'react';
import './Footer.scss';
import htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';




const Footer = () => {
  const downloadFont = () => {
    window.location = `https://jkrglobalnewyork.ftpstream.com/439032/3a9b02877e6e932dba6699ae7690e48b/QuidProSans-Regular.otf`
  }
  const downloadPoster = (e) => {
    const notepad = document.querySelector('.notepad')
    notepad.value += '\nThis is the final word from the pres of the u.s.'
    htmlToImage.toBlob(document.getElementById('capture'))
    .then(blob => {
      window.saveAs(blob, 'FinalWord.png')
    })

  }
  const donateACLU = () => {
    window.location = `https://action.aclu.org/give/fund-every-fight-ahead`
  }
  return (
    <footer className='footer'>
      <button className='footer-link font capitalized' onClick={downloadFont}>
        Download Font
      </button>
      <button className='footer-link capitalized' onClick={donateACLU}>
        Quid Pro Quo
      </button>
      <button className='footer-link picture capitalized' onClick={downloadPoster}>
        Download Poster
      </button>
    </footer>
  )
}
export default Footer;
