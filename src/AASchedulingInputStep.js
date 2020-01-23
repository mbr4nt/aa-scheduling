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

class AASchedulingInputStep extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper>
          <h1>Send an email for you advisors</h1>
          <div>Select one of the automated campaigns below</div>
        </Paper>
        <br />
        <br />
        <div>
          <AASchedulingCampaignPick
            marketingGroupID={this.props.marketingGroupID}
            dialogSelections={this.props.dialogSelections}
          />
        </div>
        <br />
        <br />
        <div>
          <AASchedulingTimePick
            marketingGroupID={this.props.marketingGroupID}
            dialogSelections={this.props.dialogSelections}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AASchedulingInputStep);
