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
import About from '../../components/About'
import Writings from '../../components/Writings'
import Projects from '../../components/Projects'
import Social from '../../components/Social'
import styles from './styles.module.css'

const App: React.FC = () => {
  const [tab, setTab] = useState<number>(0)

  const handleChange = value => {
    setTab(value)
  }

  return (
    <div className={styles.App}>
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
                <span role="img" aria-label="rose">
                  🌹
                </span>{' '}
                About
              </Tab>
              <Tab className={styles.Tab} value={1}>
                <span role="img" aria-label="rose">
                  📝
                </span>{' '}
                Writings
              </Tab>
              <Tab className={styles.Tab} value={2}>
                <span role="img" aria-label="rose">
                  💻
                </span>{' '}
                Projects
              </Tab>
              <Tab className={styles.Tab} value={3}>
                <span role="img" aria-label="rose">
                  👪
                </span>{' '}
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
  )
}

export default App
