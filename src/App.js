import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { useScrollPosition } from "./useScroll"

function App() {
  const [sticky, setSticky] = useState(false);

  useScrollPosition({
    effect:
      ({ prevPos, currPos }) => {
        const scrollUp = currPos.y > prevPos.y
        if (scrollUp !== sticky) {

          setSticky(scrollUp)
        }
      },
    deps: [sticky],
    wait: 100,
  }
  )

  useEffect(() => {
    if (!sticky) {
      setTimeout(() => {
        setSticky(true)
      }, 1000)
    }
  }, [sticky])


  return (
    <div style={{
      height: '20000px',
      padding: '20px'
    }}>
      {console.log(sticky)}
      {sticky && (
        <div style={{
          position: "fixed",
          transform: sticky ? "translateY(100%)" : "translateY(0)",
          transition: "transform 400ms ease-in",
          bottom: '100px',
          left: '50%',
        }}>
          tes
        </div>
      )}

    </div>
  );
}

export default App;
