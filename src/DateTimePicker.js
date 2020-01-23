import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DateTimePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    props.selectedDateTime
  );

  const handleDateChange = date => {
    setSelectedDate(date);
    if (props.onChange) props.onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Day"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
