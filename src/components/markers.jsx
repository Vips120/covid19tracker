import React from "react";

import Tester from "./tester";

const Markers = ({ data }) => {
    console.log(data);
    if (!data) { return null;}
    return (data.map(item => <Tester key={item.uid}  i={item} />)
    )};


export default Markers;