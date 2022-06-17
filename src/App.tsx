import { Header } from "./components/Header"
import { IPost, Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

const Posts: IPost[] = [{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/tyagolp.png',
    name: 'Tiago Barbosa Leite',
    role: 'Full Stack Developer'
  },
  content: [
    { type: "paragraph", content: 'Fala galeraa 👋' },
    { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
    { type: "link", content: '👉 jane.design/doctorcare' },
  ],
  publishedAt: new Date('2022-05-03 20:00:00')
}, {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat'
  },
  content: [
    { type: "paragraph", content: 'Fala galeraa 👋' },
    { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
    { type: "link", content: '👉 jane.design/doctorcare' },
  ],
  publishedAt: new Date('2022-05-10 20:00:00')
}]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {Posts.map(x => <Post key={x.id} post={x} />)}
        </main>
      </div>
    </>
  )
}

export default App

