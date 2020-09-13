import React, {useState, useEffect} from "react";

import  axios  from "axios";
import Totalcases from "./totalcases";
import Recoverd from "./recoverd";
import Activecases from "./activecases";
import Totaldeath from "./totaldeath";

const Header = () => {
    const [totalCases, setTotalCases] = useState("");
    const [recovered, setRecovered] = useState("");
    // const [activeCases, setActiveCases] = useState("");
    const [totalDeath, setTotalDeath] = useState("");
 useEffect(() => {
        let data = async () => {
            let response = await axios.get('https://covid19.mathdro.id/api');
            // console.log(response);
            setTotalCases(response.data.confirmed.value);
            setRecovered(response.data.recovered.value);
            setTotalDeath(response.data.deaths);
        }
     data();
    },[totalCases]);

    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <Totalcases cases={totalCases}/>
                    </div>
                    <div className="col-md-3">
                        <Recoverd recover={recovered}/>
                    </div>
                    <div className="col-md-3" style={{display:'flex'}}>
                        <Totaldeath death={totalDeath}/>
                    </div>

                </div>
            </div>
     </React.Fragment>
 )
};

export default Header;