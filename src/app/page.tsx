import Image from 'next/image'
import LeftNav from './components/leftNavbar/leftNav'
import TopBody from './components/topBody/topBody'
import MainBody from './components/mainBody/mainBody'
import TopNav from './components/topNav/topNav'
import "./styles/main.css"
import "./styles/responsive.css"

export default function Home() {
  return (
    <main>
      <div className="horizontalLayout">
      <LeftNav />
      </div>
      <div className="verticleLayout">
      <div>
      <TopNav />
      </div>
      <div>
      <TopBody />
      </div>
      <div>
      <MainBody />
      </div>
      </div>
    </main>
  )
}
