import React from 'react'
import { Anchor } from 'react95'

const About: React.FC = () => (
  <>
    <p>
      William Grosset — 22 years old, dual citizen of the United Kingdom and
      Canada, residing in Vancouver, and a Software Engineer working with the
      Growth team at{' '}
      <Anchor className="link" href="https://segment.com/" target="_blank">
        Segment
      </Anchor>
      . At 20, I worked with the Revenue team at{' '}
      <Anchor className="link" href="https://www.change.org/" target="_blank">
        Change.org
      </Anchor>
      . At 19, I worked with the LEAD Lab research group on an open source
      health care product at the University of Victoria where I study Computer
      Science.
    </p>
  </>
)

export default About
