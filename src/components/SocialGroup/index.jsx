import React from 'react'
import twitterIcon from "../../assets/icons/twitter.svg"
import fbIcon from "../../assets/icons/fb.svg"
import instaIcon from "../../assets/icons/insta.svg"
import githubIcon from "../../assets/icons/github.svg"
import "../../styles/components/_socialgroup.scss"

const SocialGroup = () => {
  return (
    <ul>
        <li>
            <img src={twitterIcon} alt="" />
        </li>
        <li>
            <img src={fbIcon} alt="" />
        </li>
        <li>
            <img src={instaIcon} alt="" />
        </li>
        <li>
            <img src={githubIcon} alt="" />
        </li>
    </ul>
  )
}

export default SocialGroup