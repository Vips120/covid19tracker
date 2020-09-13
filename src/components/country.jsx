import React from "react";

const Country  = ({items, countryName}) => {
    // console.log(props);
    if(!items) {return null;}
    if(!countryName) {return null;}
    return (
        <React.Fragment>
            <div className="card">
  <div className="card-header">
    {countryName}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Confirmed {items.confirmed.value}</li>
    <li className="list-group-item">Deaths {items.deaths.value}</li>
    <li className="list-group-item">Recovered {items.recovered.value}</li>
  </ul>
</div>
        </React.Fragment>
    )
}

export default Country;