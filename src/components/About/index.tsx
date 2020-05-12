import React from 'react'
import { Anchor } from 'react95'
import { linkClicked } from '../../analytics'
import { withLDConsumer } from 'launchdarkly-react-client-sdk'
import { LDFlagSet } from 'launchdarkly-js-client-sdk'

interface Props {
  flags?: LDFlagSet
}

const About: React.FC<Props> = ({ flags }) => (
  <>
    {flags.foo && (
      <p>
        William Hamilton Grosset — 23 year old in Vancouver, dual citizen of the
        United Kingdom and Canada, Computer Science Student, and Software
        Engineer with the Growth team at{' '}
        <Anchor
          className="link"
          href="https://segment.com/"
          target="_blank"
          onClick={() => linkClicked('Segment')}
        >
          Segment
        </Anchor>
        . Previously, I worked with the Revenue team at{' '}
        <Anchor
          className="link"
          href="https://www.change.org/"
          target="_blank"
          onClick={() => linkClicked('Change.org')}
        >
          Change.org
        </Anchor>{' '}
        and contributed to an open source health care project with the LEAD
        Research Lab at the University of Victoria.
      </p>
    )}
  </>
)

export default withLDConsumer()(About)
