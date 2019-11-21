import React from 'react';
import './Footer.scss';
import Font from '../../Assets/BFTinyHand-Regular.otf';
import html2canvas from 'html2canvas';

const Footer = () => {
  const downloadFont = () => {
    window.location = Font
  }
  const downloadPoster = (e) => {


    html2canvas(document.querySelector("#capture"), {
    // html2canvas(document.body, {
      onrendered: function(canvas) {
        debugger;
        document.body.appendChild(canvas);
      },
      width: 1080,
      height: 1350
    })
    .then(canvas => {
      let image = new Image();
	    image.src = canvas.toDataURL("image/png");
      document.body.appendChild(image);
      // debugger;
      // window.location = image
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
