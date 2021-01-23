import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";

import image1 from "assets/img/hugo-danet.jpeg";
import image2 from "assets/img/julien-thomas.jpg";

const useStyles = makeStyles(styles);

export default function TeamPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Our Team</h2>
          <h5 className={classes.description}>
            We are two students in Data Science & Engineering passionate about web technologies.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody>
              <a href="https://www.linkedin.com/in/hugo-danet/" target="_blank">
              <CardAvatar testimonial profile>
                      <img src={image1}/>
                </CardAvatar>
                </a>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                Hugo Danet
              </h3>
              <p className={classes.cardCategory}>
                Frontend developer
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody>
              <a href="https://www.linkedin.com/in/julien-thomas-48b227173/" target="_blank">
              <CardAvatar testimonial profile>
                      <img src={image2}/>
                </CardAvatar>
                </a>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                Julien Thomas
              </h3>
              <p className={classes.cardCategory}>
                AWS backend developer
              </p>
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
    </div>
  );
}
