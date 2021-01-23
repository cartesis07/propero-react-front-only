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

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";

const useStyles = makeStyles(styles);

export default function PricingPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Pick the best plan for you</h2>
          <h5 className={classes.description}>
            You have Free Unlimited Updates and Premium Support on each package.
            All your personal data will remain secure and confidential.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>Discover</h6>
              <div className={classes.icon}>
                <Icon className={classes.iconWhite}>weekend</Icon>
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                 FREE
              </h3>
              <p className={classes.cardCategoryWhite}>
                Try our offer for free during 1 month !
                Up to 5 GB of free storage.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing raised>
            <CardBody pricing>
              <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
              <div className={classes.icon}>
                <Home className={classes.iconRose} />
              </div>
              <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                $9 /month
              </h3>
              <p className={classes.cardDescription}>
                This is good if you manage less than 20 properties.
              </p>
              <Button round color="rose">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $29 /month
              </h3>
              <p className={classes.cardCategoryWhite}>
                This is good if you manage more than 20 properties.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
