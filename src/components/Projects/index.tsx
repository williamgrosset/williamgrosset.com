import React, { useState } from 'react'
import { TabBody, Anchor, Select, Button } from 'react95'

const projects = [
  {
    value: 0,
    label: '📖 Chapter',
    description: 'Conventions and rules for Git commit messages to ensure that commented changes become descriptive, informative, and standardized.',
    languages: 'C++',
    url: 'https://github.com/williamgrosset/chapter'
  },
  {
    value: 1,
    label: '🐢 Turtle',
    description: 'A 200-line Unix shell that supports basic command execution, changing directories, and running background processes.',
    languages: 'C',
    url: 'https://github.com/williamgrosset/turtle'
  },
  {
    value: 2,
    label: '📡 Trace',
    description: 'Analyze IP datagrams in a capture file. Echo information from a capture file such as the source and destination, intermediate routers, protocol types, round-trip times, and fragmentation.',
    languages: 'Python',
    url: 'https://github.com/williamgrosset/trace'
  },
  {
    value: 3,
    label: '🐦 Tweety',
    description: "Basic HTTP CLI that echos a web server’s support for HTTPs, highest HTTP version, and available cookies. Built to spec defined in RFC 1945, 2616 and 7450.",
    languages: 'Python',
    url: 'https://github.com/williamgrosset/tweety'
  },
  {
    value: 4,
    label: '📧 Mail',
    description: 'Simple, animated, and customizable React mail icon.',
    languages: 'TypeScript',
    url: 'https://github.com/williamgrosset/react-mail-icon'
  },
  {
    value: 5,
    label: '✊ Fokus',
    description: 'Chrome extension for productivity and meditation. Block listed domains and practice meditation when subconciously navigating to those specific sites.',
    languages: 'JavaScript',
    url: 'https://github.com/williamgrosset/fokus'
  },
  {
    value: 6,
    label: '🏥 ConCert',
    description: 'Public API, Bash scripts, and a UI to support auditing of the open source OSCAR EMR system. Project supervised by Dr. Jens Weber and Dr. Raymond Rusk at the UVic LEAD Lab.',
    languages: 'Java',
    url: 'https://github.com/williamgrosset/OSCAR-ConCert/tree/master/ConCert'
  },
  {
    value: 7,
    label: '🍍 Ripe',
    description: 'Product Manager for building a iOS, point-of-sale application with photo recognition for grocers. Built within a 24 hour hackathon and achieved 2nd place at MLH2017.',
    languages: 'Swift',
    url: 'https://github.com/williamgrosset/ripe'
  }
]

const Projects: React.FC = () => {
  const [project, setProject] = useState<number>(0)

  const handleChange = value => {
    setProject(value)
  }

  return (
    <TabBody>
      <div>
        <Select items={projects} onChange={handleChange} width={150} />
        {projects.map((item, index) => (
          index === project && (
            <>
              <p style={{ lineHeight: 1.5 }}>{item.description}</p>
              <Button><Anchor style={{ textDecoration: 'none', color: '#050608' }} href={item.url}>View project</Anchor></Button>
              <span style={{ display: 'inline-block', height: '12px', width: '12px', marginLeft: '13px', marginRight: '5px', borderRadius: '100%', backgroundColor: 'purple' }}></span>
              <span>{item.languages}</span>
            </>
          )
        ))}
      </div>
    </TabBody>
  )
}

export default Projects
