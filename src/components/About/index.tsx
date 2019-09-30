import React from 'react'
import { TabBody, Anchor } from 'react95'

const About: React.FC = () => (
  <TabBody>
    <p>
      William Grosset — 22 years old, dual citizen of the United Kingdom and
      Canada, residing in Vancouver, and a Software Engineer working with the
      Growth team at{' '}
      <Anchor className="link" href="https://segment.com/" target="_blank">
        Segment
      </Anchor>
      . Previously, I worked with the Revenue team at{' '}
      <Anchor className="link" href="https://www.change.org/" target="_blank">
        Change.org
      </Anchor>
      . At 19, I worked with the LEAD Lab at the University of Victoria as a
      Research Assistant where I study Computer Science.
    </p>
  </TabBody>
)

export default About
