// Copyright (c) 2021 Ivan Zadvornov

import './Contact.css'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="ContactList">
        <a
          href="https://github.com/ivteplo"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
        <a
          href="https://twitter.com/ivteplo"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          <FontAwesomeIcon icon={faTwitter} />
          Twitter
        </a>
        <a
          href="https://instagram.com/iteplov7"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
      </div>
    </section>
  )
}

