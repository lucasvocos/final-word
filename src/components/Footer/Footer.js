import React from 'react';
import './Footer.scss';
import htmlToImage from 'html-to-image';
import saveAs from 'file-saver';
import SVG from './QUIDPROQUOSANS.svg'
import PNG from './QUIDPROQUOSANS.png'

const Footer = () => {

  const downloadFont = () => {
    window.location = `https://drive.google.com/uc?export=download&id=1Hphp9SyZFxy2i4Sk_zP7iesJ6QQF2mBZ`
  }

  const downloadPoster = (e) => {
    
    const notepad = document.querySelector('.notepad')
    let origValue = notepad.value
    notepad.value += '\nThis is the final word from the pres of the u.s.'
    

    const wrapper = document.getElementById('capture')
    let origHeight = notepad.offsetHeight
    wrapper.style.minHeight = wrapper.offsetWidth + 'px'
    wrapper.style.backgroundColor = 'white'
    
    
    
    const link = document.createElement('IMG')
    link.style.backgroundColor = 'white'
    link.style.textAlign = 'center'
    link.style.width = 'auto'
    link.style.height = '18px'
    link.style.left = '25%'
    link.style.right = '25%'
    link.style.marginBottom = '50px'
    link.style.zIndex = 9
    link.src = SVG
    link.classList.add('download')

    
    wrapper.appendChild(link)
    
    
    
    htmlToImage.toBlob(wrapper)
    .then(blob => {
      window.saveAs(blob, 'FinalWord.png')
      notepad.value = origValue
      wrapper.removeChild(link)
      wrapper.style.minHeight = origHeight + 'px'
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
