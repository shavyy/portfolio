import styles from "./style";
import { StarsCanvas, WorkCard, About, Experience, GalleryDrawing, Contact, Footer, Navbar, KeyWord, Intro,  } from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Intro />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
          <KeyWord />
      </div>
          <About/>
          <Experience/>
          <WorkCard/>
          <GalleryDrawing />
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-0`}>
          <Contact />
          <StarsCanvas />
      </div>
      <Footer />
    </div>
);
}

export default App;