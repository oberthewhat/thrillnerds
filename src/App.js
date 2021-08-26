import React, {useState, useEffect} from "react";
import { styles } from "./styles/app"
import CircularProgress from '@material-ui/core/CircularProgress';
// import { TemporaryDrawer } from './pages/Darwer'
import logo from './images/thrillnerds-logo-01.png'

function App() {

  const [width, setWindowWidth] = useState(0)

   useEffect(() => { 

     updateDimensions();

     window.addEventListener('resize', () => updateDimensions);
     return () => 
       window.removeEventListener('resize', updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }

    const reactive = width > 600 ? styles.underConstruction : styles.mobileUnderConstruction

  return (
    <div style={styles.tempBody}>
        <div style={reactive}>
         <div style={styles.logo}><img src={logo} alt="Logo" /></div>
         <div>Under Construction</div>
         <div style={styles.spinner}>
         <CircularProgress/>
         </div>
         <div style={styles.checkBack}>Check back soon!</div>
         
        </div>

    </div>
  );
}

export default App;
