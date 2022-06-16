import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Tiago"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum esse fugit, dolorem harum eligendi praesentium placeat sit pariatur dolorum ipsum, saepe autem iure ducimus blanditiis inventore illo odit molestias eos."
          />
          <Post
            author="Boca Aberta"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </>
  )
}

export default App

