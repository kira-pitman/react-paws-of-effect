import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitle text="Canines using super-canine abilities to be the Best Bois." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog
        name="Compost Bucket"
        breed="Misc"
        superpower="Accelated decomposition"
      />
    </div>
  )
}

export default App
