import "./App.scss"
import { Banner } from "./components/Banner"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <Banner />
      </main>
    </div>
  )
}

export default App
