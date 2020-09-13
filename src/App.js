import React from "react";
import Header from "./components/header";

import Map from "./components/map.chart"; 
import Search from "./components/search";


const App = () => {

  return (
    <React.Fragment>
      <div className="container" style={{paddingTop:'20px'}}>
      <Header/>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-8">
      <Map />        
        </div>
        <div className="col-md-4">
          <Search/>
        </div>
        </div>

      </div>
      
    </React.Fragment>
  )
}

export default App;