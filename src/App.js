import logo from './logo.svg';
import './App.scss';
import WorkCard from './components/WorkCard/WorkCard';

const listOfWork = [
  {title:"Tidbits",
role:"Lead Developer",
stack:"SwiftUI, Swift, Firebase Firestore, Authentication",
description:"A delightful, clean, rolodex app for iOS",
links:[{title:"Details",link:"https://www.google.ca"}],
img:"www.hello.com"
}, 
{title:"Bored Games",
role:"Lead Developer/Designer",
stack:"HTML, SCSS, React, Express, Node",
description:"A  rental marketplace for board games",
links:[{title:"Live",link:"https://www.google.ca"},{title:"Github", link:"https://www.google.ca"}],
img:"www.hello.com"
}, 
{title:"Custom Wordle",
role:"Lead Developer/Designer",
stack:"HTML, SCSS, Firebase Firestore, AWS Amplify",
description:"Make your friends their very own Wordle!",
links:[{title:"Live",link:"https://www.google.ca"},{title:"Github", link:"https://www.google.ca"}],
img:"www.hello.com"
}
]

const test = [{title:"hello"}]
console.log(listOfWork)
function App() {
  return (
    <div className="App">
      <main>
        <header className='header'>
        
        <h1 className='header__title'>Mike <br /> Mifsud-Sweeney</h1>
        <p className='header__about'>Developer with experience designing products at Meta. Looking for a developer role</p>
        <p className="header__email">michaelmifsudsweeney@gmail.com</p>
        </header>
      
      <h3 className='section__subtitle'>WORK</h3>

      <div className="listOfPortfolioPieces">
      {listOfWork.map((portfolioPiece) => {
        return <WorkCard portfolioPiece={portfolioPiece}/>
        
        
      })}
      </div>

      </main>
    </div>
  );
}

export default App;
