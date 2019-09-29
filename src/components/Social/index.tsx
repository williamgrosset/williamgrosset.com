import React, { useState } from 'react'
import { TabBody, Anchor, Button } from 'react95'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import Confetti from 'react-dom-confetti'
import styles from './styles.module.css'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/williamgrosset',
    icon: faGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/williamgrosset',
    icon: faLinkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/williamhgrosset',
    icon: faTwitter
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/williamgrosset',
    icon: faInstagram
  }
]

const Socials: React.FC = () => {
  const [isConfettiVisible, setConfettiVisibility] = useState<boolean>(false)

  const throwConfetti = () => {
    setConfettiVisibility(true)
  }

  return (
    <TabBody>
      <p>
        You can reach me by
        <Button className={styles.Button} onClick={throwConfetti}>
          <Anchor href="mailto:williamhgrosset@gmail.com">Email</Anchor>
        </Button>
      </p>
      <div className={styles.SocialButtonsWrapper}>
        {socials.map((item, index) => (
          <Button className={styles.SocialButton}>
            <Anchor href={item.url} target="_blank">
              <Icon icon={item.icon} /> <span>{item.name}</span>
            </Anchor>
          </Button>
        ))}
      </div>
      <div className={styles.ConfettiWrapper}>
        <Confetti active={isConfettiVisible} />
      </div>
    </TabBody>
  )
}

export default Socials
