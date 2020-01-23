import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AASchedulingInputStep from "./AASchedulingInputStep";
import AASchedulingConfirmStep from "./AASchedulingConfirmStep";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Api from "./Api";
import { LinearProgress } from "@material-ui/core";

const styles = theme => ({
  root: {
    fontFamily: "Arial"
  }
});

const steps = ["Schedule Email", "Confirm"];

class AASchedulingDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      allSet: false,
      currentStep: 0,
      selections: {
        masterCampaignID: 0,
        campaignTitle: "",
        scheduledDateTime: new Date()
      }
    };
  }

  next = event => {
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  };

  back = event => {
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  };

  cancel = event => {
    if (this.props.onCancel) this.props.onCancel();
  };

  close = event => {
    this.cancel();
  };

  goToCampaignsHomepage = event => {
    location = this.props.campaingsHomeUrl;
  };

  schedule = event => {
    var self = this;
    self.setState({ loading: true });

    var api = new Api();
    api.getCampaigns(this.props.marketingGroupID, function(data) {
      //assetID
      self.setState({
        allSet: true,
        loading: false
      });
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.loading)
      return (
        <div className={classes.root}>
          <h1>Scheduling...</h1>
          <LinearProgress />
        </div>
      );

    if (this.state.allSet)
      return (
        <div className={classes.root}>
          <h1>All set!</h1>
          <div>Your email is scheduled!</div>
          <Button onClick={this.close}>Close</Button>
          <Button onClick={this.goToCampaignsHomepage}>
            Show all campaigns
          </Button>
        </div>
      );
    else
      return (
        <div className={classes.root}>
          <Stepper activeStep={this.state.currentStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {this.renderCurrentStep()}
        </div>
      );
  }

  renderCurrentStep() {
    if (steps[this.state.currentStep] == "Schedule Email")
      return (
        <div>
          <AASchedulingInputStep
            marketingGroupID={this.props.marketingGroupID}
            dialogSelections={this.state.selections}
          />
          <br />
          <Button onClick={this.cancel}>Cancel</Button>
          <Button onClick={this.next}>Next</Button>
        </div>
      );
    else
      return (
        <div>
          <AASchedulingConfirmStep
            marketingGroupID={this.props.marketingGroupID}
            emailTitle={this.props.emailTitle}
            campaignTitle={this.state.selections.campaignTitle}
            scheduledDateTime={this.state.selections.scheduledDateTime}
          />
          <br />
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.schedule}>Schedule</Button>
        </div>
      );
  }
}

export default withStyles(styles, { withTheme: true })(AASchedulingDialog);
