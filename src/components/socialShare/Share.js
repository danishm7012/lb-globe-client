import React from 'react'
import './share.css'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share'

const Share = () => {
  return (
    <>
      <div className='social-share' style={{ zIndex: 3 }}>
        <FacebookMessengerShareButton url='https://www.lbglobe.org'>
          <FacebookMessengerIcon
            className='py-1 shareIcon'
            logoFillColor='white'
            round={true}
            size={40}
          ></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <FacebookShareButton url='https://www.lbglobe.org'>
          <FacebookIcon
            className='py-1 shareIcon'
            logoFillColor='white'
            round={true}
            size={40}
          ></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url='https://www.lbglobe.org'>
          <TwitterIcon
            className='py-1 shareIcon'
            logoFillColor='white'
            round={true}
            size={40}
          ></TwitterIcon>
        </TwitterShareButton>
        <WhatsappShareButton url='https://www.lbglobe.org'>
          <WhatsappIcon
            className='py-1 shareIcon'
            logoFillColor='white'
            round={true}
            size={40}
          ></WhatsappIcon>
        </WhatsappShareButton>
        <LinkedinShareButton url='https://www.lbglobe.org'>
          <LinkedinIcon
            className='py-1 shareIcon'
            logoFillColor='white'
            round={true}
            size={40}
          ></LinkedinIcon>
        </LinkedinShareButton>
      </div>
    </>
  )
}

export default Share
