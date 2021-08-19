import React from "react";
import { styles } from "./styles/app"
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  return (
    <div style={styles.tempBody}>
        <div style={styles.underConstruction}>
         <div>ThrillNerds.com Under Construction</div>
         <CircularProgress />
         <div style={styles.checkBack}>Check back soon!</div>
        </div>

    </div>
  );
}

export default App;
