import React from 'react';
import './Footer.scss';
import html2canvas from 'html2canvas';
import htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';




const Footer = () => {
  const downloadFont = () => {
    // window.location = Font
  }
  const downloadPoster = (e) => {
    htmlToImage.toBlob(document.getElementById('capture'))
    .then(blob => {
      window.saveAs(blob, 'FinalWord.png')
    })

  }
  const donateACLU = () => {
    window.location = `https://action.aclu.org/give/fund-every-fight-ahead?cid=7014A000001jne3QAA&ms_aff=nat&initms_aff=nat&ms=190423_SEM_Search-Email_77901377908_donate%20to%20aclu_e_345037627661%20&initms=190423_SEM_Search-Email_77901377908_donate%20to%20aclu_e_345037627661&ms_chan=sem&initms_chan=sem&ms_ex=bpi&initms_ex=bpi&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlsF0bm55Nb0Umi652GEoJcul_jPFvMNGI-GPp6KnOi0wYLRPPR6p6oaAmx0EALw_wcB&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlsF0bm55Nb0Umi652GEoJcul_jPFvMNGI-GPp6KnOi0wYLRPPR6p6oaAmx0EALw_wcB`
  }
  return (
    <footer className='footer'>
      <button className='footer-link font capitalized' onClick={downloadFont}>
        Download Font
      </button>
      <button className='footer-link capitalized' onClick={donateACLU}>
        Donate to ACLU
      </button>
      <button className='footer-link picture capitalized' onClick={downloadPoster}>
        Download Poster
      </button>
    </footer>
  )
}
export default Footer;
