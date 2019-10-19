import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  themes
} from 'react95'
import { Transition } from 'react-transition-group'
import { isBrowser } from 'react-device-detect'
import { tabClicked } from '../../analytics'
import About from '../About'
import Writings from '../Writings'
import Projects from '../Projects'
import Social from '../Social'
import styles from './styles.module.css'

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scale(0)',
    transitionDuration: '300ms'
  },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
    transitionDuration: '300ms'
  }
}

const tabs = ['About', 'Writings', 'Projects', 'Social']

const App: React.FC = () => {
  const [tab, setTab] = useState<number>(0)

  const handleChange = value => {
    setTab(value)
    tabClicked(tabs[value])
  }

  return (
    <Transition in={true} appear timeout={300}>
      {state => (
        <div style={transitionStyles[state]} className={styles.App}>
          <ThemeProvider theme={themes.default}>
            <Window className={styles.Window}>
              <WindowHeader>
                <span role="img" aria-label="man">
                  🙋‍♂️{' '}
                </span>{' '}
                me.exe
              </WindowHeader>
              <WindowContent>
                <Tabs value={tab} onChange={handleChange}>
                  <Tab className={styles.Tab} value={0}>
                    {isBrowser && (
                      <>
                        <span role="img" aria-label="rose">
                          🌹
                        </span>{' '}
                      </>
                    )}
                    About
                  </Tab>
                  <Tab className={styles.Tab} value={1}>
                    {isBrowser && (
                      <>
                        <span role="img" aria-label="rose">
                          📝
                        </span>{' '}
                      </>
                    )}
                    Writings
                  </Tab>
                  <Tab className={styles.Tab} value={2}>
                    {isBrowser && (
                      <>
                        <span role="img" aria-label="rose">
                          💻
                        </span>{' '}
                      </>
                    )}
                    Projects
                  </Tab>
                  <Tab className={styles.Tab} value={3}>
                    {isBrowser && (
                      <>
                        <span role="img" aria-label="rose">
                          👪
                        </span>{' '}
                      </>
                    )}
                    Social
                  </Tab>
                </Tabs>
                <TabBody>
                  {tab === 0 && <About />}
                  {tab === 1 && <Writings />}
                  {tab === 2 && <Projects />}
                  {tab === 3 && <Social />}
                </TabBody>
              </WindowContent>
            </Window>
          </ThemeProvider>
        </div>
      )}
    </Transition>
  )
}

export default App
