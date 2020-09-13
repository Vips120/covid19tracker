import React from "react";
import { Card } from "react-bootstrap";

const Totaldeath = (props) => {
  const numberFormat = new Intl.NumberFormat();
  return (
        <React.Fragment>
              <Card style={{borderBottom:'5px solid red'}}>
  <Card.Body>
                    <Card.Title>
              Total Death:<br/>{numberFormat.format(props.death.value)}
              
    </Card.Title>
  </Card.Body>
</Card>             
        </React.Fragment>)
}

export default Totaldeath;