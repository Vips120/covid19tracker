import React from "react";
import { Card } from "react-bootstrap";
const Totalcases = (props) => {
    // console.log(props);
    const numberFormat = new Intl.NumberFormat();
    return (
        <React.Fragment>
              <Card style={{borderBottom:'5px solid #f5425a'}}>
  <Card.Body>
                    <Card.Title>
     Total Cases: {numberFormat.format(props.cases)}
    </Card.Title>
  </Card.Body>
</Card>             
        </React.Fragment>
    )
}

export default Totalcases;