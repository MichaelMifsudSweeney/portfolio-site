import logo from './logo.svg';
import './App.scss';
import WorkCard from './components/WorkCard/WorkCard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Tidbits from './pages/Tidbits/Tidbits';
import Footer from './components/Footer/Footer';
const listOfWork = [
  {
    title: "Tidbits",
    role: "Lead Developer",
    stack: "SwiftUI, Swift, Firebase Firestore, Authentication",
    description: "A delightful, clean, rolodex app for iOS",
    links: [{ title: "Details", link: "tidbits" }],
    img: "TidbitsHero"
  },
  {
    title: "Bored Games",
    role: "Lead Developer/Designer",
    stack: "HTML, SCSS, React, Express, Node",
    description: "A  rental marketplace for board games",
    links: [{ title: "Live", link: "https://www.bored-games.ca/home" }, { title: "Github", link: "https://github.com/MichaelMifsudSweeney/bored-games" }],
    img: "BoredGamesHero"
  },
  {
    title: "Custom Wordle",
    role: "Lead Developer/Designer",
    stack: "HTML, SCSS, Firebase Firestore, AWS Amplify",
    description: "Make your friends their very own Wordle!",
    links: [{ title: "Live", link: "https://www.custom-wordle.com/" }, { title: "Github", link: "https://github.com/MichaelMifsudSweeney/Custom-Wordle" }],
    img: "CustomWordleHero"
  },
  // {title:"Design and other work",
  // role:"Lead Developer/Designer",
  // stack:"Figma, Sketch, Processing, Origami Studio, Illustrator",
  // description:"Assorted Design work including launched designs, prototypes, data visualizations, and posters",
  // links:[{title:"Live",link:"https://www.custom-wordle.com/"},{title:"Github", link:"https://github.com/MichaelMifsudSweeney/Custom-Wordle"}],
  // img:"CustomWordleHero"
  // }
]

const test = [{ title: "hello" }]
console.log(listOfWork)
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <main className='homepage'>
              <header className='header'>
                <h1 className='header__title'>Mike <br /> Mifsud-Sweeney</h1>
                <p className='header__about'>Developer with experience designing products at Meta. Looking for a developer role.</p>
                <p className="header__email">michaelmifsudsweeney@gmail.com</p>
              </header>
              <h3 className='section__subtitle'>WORK</h3>
              <div className="listOfPortfolioPieces">
                {listOfWork.map((portfolioPiece) => {
                  return <WorkCard portfolioPiece={portfolioPiece} />
                })}
              </div>
            </main>
          } />

          <Route path="/tidbits" element={<Tidbits />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
