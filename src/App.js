import logo from './logo.svg';
import './App.css';
import WorkCard from './components/WorkCard/WorkCard';

const listOfWork = [
  {title:"Tidbits",
role:"Lead Developer",
stack:"SwiftUI, Swift, Firebase Firestore, Authentication",
description:"A delightful, clean, rolodex app for iOS",
links:[{title:"link1",link:"https://www.google.ca"},{title:"link2", link:"https://www.google.ca"}],
img:"www.hello.com"
}
]

const test = [{title:"hello"}]
console.log(listOfWork)
function App() {
  return (
    <div className="App">
      <main>
        
        <h1>Mike Mifsud-Sweeney</h1>
        <p>Developer with experience designing products at Meta. Looking for a developer role</p>
        <p className="email">michaelmifsudsweeney@gmail.com</p>
        
      <h3>WORK</h3>
      {listOfWork.map((portfolioPiece) => {
        return <WorkCard portfolioPiece={portfolioPiece}/>
        
        
      })}

      </main>
    </div>
  );
}

export default App;
