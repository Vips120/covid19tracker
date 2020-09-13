import React, {useState,useEffect,useRef} from "react";
import axios from "axios";
import Country from "./country";

const Search  = () => {
    const [search,setSearch] = useState('');
    const [state, setState] = useState(null);

    const timeOut = useRef(null);

    const fetchSerchData = async(search) => {
        if(search){
            let response = await axios.get(`https://covid19.mathdro.id/api/countries/${search}`);
            // console.log(response.data);
            setTimeout(() => {
                setState(response.data);
            },1000);
        } else {
            let response = await axios.get(`https://covid19.mathdro.id/api/countries/india`);
            // console.log(response.data);
            setTimeout(() => {
                setState(response.data);
            },1000);
        }
    
    };

    const searchData = (event) => {
        const {value} = event.target;
       //  console.log(event.target.value);
       clearTimeout(timeOut.current);
       // setSearch(event.target.value);
       // ref.current = setTimeout(() => {
       //   props.searchCallback(event.target.value);
       // },500);
   
       setSearch(value);
       timeOut.current = setTimeout(() => {fetchSerchData(value)},1000);
       // console.log(timeOut.current);
    }



//     useEffect(() => {
//         const fetchSerchData = async() => {
//             if(search){
//                 let response = await axios.get(`https://covid19.mathdro.id/api/countries/${search}`);
//                 // console.log(response.data);
//                 setTimeout(() => {
//                     setState(response.data);
//                 },2000);

//             } else {
//                 let response = await axios.get(`https://covid19.mathdro.id/api/countries/india`);
//                 // console.log(response.data);
//                 setTimeout(() => {
//                     setState(response.data);
//                 },2000)

//             }
        
//         };
//         fetchSerchData(search)
//     }
// , [search]);
    return(
        <React.Fragment>
            <div className="container" style={{paddingTop:'20px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="search" className="form-control" placeholder="search country"
                            value={search}
                            onChange={searchData}
                             onSubmit = {() => fetchSerchData(search)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    {
                        state ? <Country items={state} countryName={search}/> : null
                    }

                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search;