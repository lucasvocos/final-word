import React from 'react';
import './Footer.scss';
import htmlToImage from 'html-to-image';
import saveAs from 'file-saver';

const Footer = () => {

  const downloadFont = () => {
    window.location = `https://drive.google.com/uc?export=download&id=1q9xPoqFpQ4ifEeZg8vuVa4p7RWZnze5Z`
  }

  const downloadPoster = (e) => {
    
    const notepad = document.querySelector('.notepad')
    let origValue = notepad.value
    notepad.value += '\nThis is the final word from the pres of the u.s.'
    

    const wrapper = document.getElementById('capture')
    let origHeight = notepad.offsetHeight
    wrapper.style.height = wrapper.offsetWidth + 'px'
    
    
    const link = document.createElement('p')
    link.innerText = 'FINALWORDFROMTHEPRES.COM'
    link.classList.add('capitalized')
    link.style.textAlign = 'center'
    link.style.backgroundColor = 'white'
    link.style.paddingBottom = '50px'
    link.style.fontFamily = 'Proxima Nova'
    
    wrapper.appendChild(link)
    
    
    htmlToImage.toBlob(wrapper)
    .then(blob => {
      window.saveAs(blob, 'FinalWord.png')
      notepad.value = origValue
      wrapper.removeChild(link)
      wrapper.style.height = origHeight + 'px'
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
