import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'

const myDog = {
  name: 'Desdemona',
  breed: 'Bulldog',
  superpower: 'Heat vision',
}

const Patchie = {
  name: 'Patchie',
  breed: 'scottie',
  superpower: 'Accelerated decomposition',
}

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitle text="Canines using super-canine abilities to be the Best Bois." />

      <Dog {...myDog} />
      <Dog {...Patchie} />
    </div>
  )
}

export default App
