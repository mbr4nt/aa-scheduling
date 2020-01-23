import "date-fns";
import React from "react";
import DateTimePicker from "./DateTimePicker";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({}));

export default function AASchedulingTimePick(props) {
  // The first commit of Material-UI
  const [value, setValue] = React.useState("asap");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleTimeChanged = date => {
    props.dialogSelections.scheduledDateTime = date;
  };

  const renderTimePicker = function() {
    if (value !== "pick") return;
    else
      return (
        <DateTimePicker
          selectedDateTime={props.dialogSelections.scheduledDateTime}
          onChange={handleTimeChanged}
        />
      );
  };

  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <FormLabel>Select Send Date</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="asap"
            control={<Radio />}
            label="Send ASAP"
          />
          <div>
            Your email campaign will be sent as soon as our system can get it
          </div>
          <FormControlLabel
            value="pick"
            control={<Radio />}
            label="Schedule Your Email"
          />
          <div>Schedule your email campaign for a future date and time</div>
        </RadioGroup>
        {renderTimePicker()}
      </FormControl>
    </div>
  );
}
