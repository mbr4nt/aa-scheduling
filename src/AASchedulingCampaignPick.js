import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Api from "./Api.js";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    fontFamily: "Arial" 
  }
});

class AASchedulingCampaignPick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedCampaign: 0,
      campaigns: []
    };
  }

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    var self = this;
    self.setState({ loading: true });

    var api = new Api();
    api.getCampaigns(this.props.marketingGroupID, function(data) {
      self.setState({
        loading: false,
        campaigns: data
      });
      self.selectCampaignByID(data[0].MasterCampaignID);
    });
  }

  selectCampaign = event => {
    this.selectCampaignByID(event.target.value);
  };

  selectCampaignByID(id) {
    this.setState({
      selectedCampaign: id
    });
    var filterdCampaigns = this.state.campaigns.filter(
      item => item.MasterCampaignID == id
    );
    var selectedCampaignObject = filterdCampaigns[0];
    this.props.dialogSelections.campaignTitle = selectedCampaignObject.Name;
    this.props.dialogSelections.masterCampaignID =
      selectedCampaignObject.masterCampaignID;
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) return <CircularProgress />;
    else
      return (
        <FormControl className={classes.formControl}>
          <FormLabel>Select Campaign</FormLabel>
          <Select
            value={this.state.selectedCampaign}
            onChange={this.selectCampaign}
          >
            {this.state.campaigns.map(campaign => (
              <MenuItem
                key={campaign.MasterCampaignID}
                value={campaign.MasterCampaignID}
              >
                {campaign.Name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
  }
}

export default withStyles(styles, { withTheme: true })(
  AASchedulingCampaignPick
);
