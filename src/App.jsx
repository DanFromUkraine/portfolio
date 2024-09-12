import { SectionWrapper} from "./components"
import { Nav, Hero } from "./sections"


const App = () => {
  return ( 
  <>
    <SectionWrapper bg="white">
      <Nav />
    </SectionWrapper>
    <SectionWrapper bg="white">
      <Hero />
    </SectionWrapper>
  </>
   
  )
}

export default App