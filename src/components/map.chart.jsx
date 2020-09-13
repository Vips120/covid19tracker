import React, { useEffect, useState } from "react";
import ReactMapGL,{LinearInterpolator} from 'react-map-gl';
import axios from "axios";
import _ from 'lodash';
import Markers from "./markers";
const Map = () => {
  const [state, setState] = useState(null);
  const [didmount, setdidmount] = useState(false);
    const [viewport, setviewport] = useState({
        width: "100%",
        height: 600,
        latitude: 0,
        longitude: 0,
        zoom: 2
    });

    const _onViewportChange = viewport => setviewport({ ...viewport, transitionDuration: 3000 });

    const TOKEN = 'pk.eyJ1IjoidmlwczEyMDEiLCJhIjoiY2tld25wamttMGhtZjMxbjQ4ankwM2tndSJ9.QwN7IhrMIt_a2IvwpUg5nA';

  useEffect(() => {
      const items = async () => {
            try {
              let response = await axios.get('https://covid19.mathdro.id/api/recovered');
                setState(response.data);
            } catch (error) {
              console.log(error.message);
      }
          };
        items();

    }, []);

 
    return (
        <React.Fragment>
<div style={{ margin: '20px auto'}}>
      <ReactMapGL
            {...viewport}
            transitionDuration={1000}
    transitionInterpolator={new LinearInterpolator()}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => setviewport(viewport)}
                >

            {!state ? null : <Markers data={state} />} 
      </ReactMapGL>
    </div>

        </React.Fragment>
  
    );


}


export default Map;