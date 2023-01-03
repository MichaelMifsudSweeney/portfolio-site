import './App.scss';
import WorkCard from './components/WorkCard/WorkCard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Tidbits from './pages/Tidbits/Tidbits';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DesignWork from './pages/DesignWork/DesignWork';

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
  {title:"Design and Other Work",
  role:"Lead Designer/Developer",
  stack:"Figma, Sketch, Processing, Origami Studio, Illustrator",
  description:"Assorted Design work including launched designs, prototypes, data visualizations, and posters",
  links: [{ title: "See more", link: "design" }],
  img:"MoreHero"
  }
]

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <main className='homepage'>
              <header className='header'>
                <h1 className='header__title'>Mike Mifsud-Sweeney</h1>
                <p className='header__about'>Developer with experience designing products at Meta. </p>
                <p className='header__about'>Currently open to opportunities that involve: creating tools, delightful experiences, design systems or are socially good. Feel free to email me at <b> michaelmifsudsweeney@gmail.com </b> if you'd like to chat more. </p>
                
              </header>
              <h3 className='section__subtitle'>WORK</h3>
              <div className="listOfPortfolioPieces">
                {listOfWork.map((portfolioPiece) => {
                  return <WorkCard portfolioPiece={portfolioPiece} key= {uuidv4()} />
                })}
              </div>
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/tidbits" element={<Tidbits />} />
          <Route path="/design" element={<DesignWork />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
