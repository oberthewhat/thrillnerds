import React, {useState, useEffect} from "react";
import { styles } from "./styles/app"
import CircularProgress from '@material-ui/core/CircularProgress';

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
         <div>ThrillNerds.com</div>
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
