import React from "react";
import { Card } from "react-bootstrap";

const Recoverd = (props) => {
    const numberFormat = new Intl.NumberFormat();
    return (
        <React.Fragment>
              <Card style={{borderBottom:'5px solid green'}}>
  <Card.Body>
                    <Card.Title>
     Total Recoverd: {numberFormat.format(props.recover)}
    </Card.Title>
  </Card.Body>
</Card>             
        </React.Fragment>)
}

export default Recoverd;