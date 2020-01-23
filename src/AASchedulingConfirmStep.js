import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AASchedulingCampaignPick from "./AASchedulingCampaignPick";
import AASchedulingTimePick from "./AASchedulingTimePick";
import { th } from "date-fns/locale";
import { Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    fontFamily: "Arial"
  }
});

class AASchedulingConfirmStep extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper>
          <h1>Confirm your email</h1>
          <div>Your email is being scheduled with the following details:</div>
        </Paper>
        <br />
        <br />
        <h2>Title of email:</h2>
        <div>{this.props.emailTitle}</div>
        <br />
        <h2>Title of campaign:</h2>
        <div>{this.props.campaignTitle}</div>
        <br />
        <h2>Email is scheduled for:</h2>
        <div>{this.props.scheduledDateTime.toString()}</div>
        <br />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AASchedulingConfirmStep);
