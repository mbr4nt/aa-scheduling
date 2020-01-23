import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Api from "./Api.js";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    fontFamily: "Arial"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class AASchedulingDialog extends React.Component {
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
        campaigns: data,
        selectedCampaign: data[0].MasterCampaignID
      });
    });
  }

  selectCampaign = event => {
    this.setState({
      selectedCampaign: event.target.value
    });
  };

  renderCampaignsDropdown(classes) {
    if (this.state.loading) return <CircularProgress />;
    else
      return (
        <FormControl className={classes.formControl}>
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.renderCampaignsDropdown(classes)}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AASchedulingDialog);
