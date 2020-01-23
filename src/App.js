import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AASchedulingDialog from "./AASchedulingDialog";
import { Button, Link, Dialog } from "@material-ui/core";

const styles = theme => ({
  root: {
    fontFamily: "Arial"
  }
});

const steps = ["Schedule Email", "Confirm"];

class AASchedulingEmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  showDialog = event => {
    this.setState({
      dialogOpen: true
    });
  };

  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Link onClick={this.showDialog}>Share for Advisors</Link>
        <Dialog open={this.state.dialogOpen}>
          <AASchedulingDialog
            onCancel={() => this.closeDialog()}
            assetID={this.props.assetID}
            emailTitle={this.props.emailTitle}
            marketingGroupID={this.props.marketingGroupID}
            campaingsHomeUrl={this.props.campaingsHomeUrl}
          />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AASchedulingEmailButton);
