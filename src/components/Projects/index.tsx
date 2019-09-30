import React, { useState } from 'react'
import { Anchor, Select, Button } from 'react95'
import styles from './styles.module.css'

const projects = [
  {
    value: 0,
    label: '📖 Chapter',
    description:
      'Conventions and rules for Git commit messages to ensure that commented changes are descriptive, informative, and standardized.',
    language: 'C++',
    languageColor: '#F34B7D',
    url: 'https://github.com/williamgrosset/chapter'
  },
  {
    value: 1,
    label: '🐢 Turtle',
    description:
      'A 200-line Unix shell that supports basic command execution, changing directories, and running background processes.',
    language: 'C',
    languageColor: '#555555',
    url: 'https://github.com/williamgrosset/turtle'
  },
  {
    value: 2,
    label: '📡 Trace',
    description:
      'Analyze IP datagrams in a capture file and echo information such as the source and destination, intermediate routers, protocol types, round-trip times, and fragmentation.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/williamgrosset/trace'
  },
  {
    value: 3,
    label: '🐦 Tweety',
    description:
      'Basic HTTP CLI that echos a web server’s support for HTTPs, highest HTTP version, and available cookies. Built to spec defined in RFC 1945, 2616 and 7450.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/williamgrosset/tweety'
  },
  {
    value: 4,
    label: '📧 Mail',
    description: 'Simple, animated, and customizable React mail icon.',
    language: 'TypeScript',
    languageColor: '#2B7489',
    url: 'https://github.com/williamgrosset/react-mail-icon'
  },
  {
    value: 5,
    label: '✊ Fokus',
    description:
      'Chrome extension for blocking distracting sites and practicing meditation after subconcious navigation.',
    language: 'JavaScript',
    languageColor: '#F1E05A',
    url: 'https://github.com/williamgrosset/fokus'
  },
  {
    value: 6,
    label: '🏥 ConCert',
    description:
      'Public API, Bash scripts, and a UI to support auditing of the open source OSCAR EMR system. Project supervised by Dr. Jens Weber and Dr. Raymond Rusk at the UVic LEAD Lab.',
    language: 'Java',
    languageColor: '#B07219',
    url: 'https://github.com/williamgrosset/OSCAR-ConCert/tree/master/ConCert'
  },
  {
    value: 7,
    label: '🍍 Ripe',
    description:
      'Product Manager for building a iOS, point-of-sale application with photo recognition for grocers. Built within a 24 hour hackathon and achieved 2nd place at MLH2017.',
    language: 'Swift',
    languageColor: '#FFAC45',
    url: 'https://github.com/williamgrosset/ripe'
  }
]

const Projects: React.FC = () => {
  const [project, setProject] = useState<number>(0)

  const handleChange = value => {
    setProject(value)
  }

  return (
    <>
      <Select items={projects} onChange={handleChange} width={150} />
      {projects.map(
        (item, index) =>
          index === project && (
            <div key={index}>
              <p>{item.description}</p>
              <Button>
                <Anchor href={item.url}>View project</Anchor>
              </Button>
              <span
                className={styles.Circle}
                style={{ backgroundColor: item.languageColor }}
              />
              <span>{item.language}</span>
            </div>
          )
      )}
    </>
  )
}

export default Projects
