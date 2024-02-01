import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

import comingSoon from "../../../img/comingSoon.jpg"
import { Link } from "react-router-dom";

export const RegularCard = (data) => {
  console.log(data)

    return (
        <Card style={{ width: "18rem", margin: "30px", display: "inline-block" }}> 
        <Card.Img 
          variant="top"
          src=""
          onError={(e) => {
              e.target.src= comingSoon;
          }}
        />
        <Card.Body>
          <Card.Title>{data.fullName}</Card.Title>
          <Card.Text>
            {data.description} <br />
            <p>
              {data.addresses[0].city}, {data.addresses[0].stateCode}
            </p>
          </Card.Text>
          <Link to="/learnmore" state={{type: data.type, index: data.id}}>
          <Button
            variant="primary"
            style={{ margin: "5px" }}
          >
            Learn More!
          </Button>
          </Link>
        </Card.Body>
      </Card>
    )
}

   