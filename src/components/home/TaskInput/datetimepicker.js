import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  
} from '@material-ui/pickers';

export default function DatePicker(props) {
  // The first commit of Material-UI
  const today = Date.now()
  const [selectedDate, setSelectedDate] = React.useState(new Date(today));

  const handleDateChange = (date) => {
    props.enterUntil(date)
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="center">
        <DateTimePicker
            variant="inline"
            value={selectedDate} onChange={handleDateChange}
            disablePast={props.dispast}
            InputProps={{
              disableUnderline: true,
             }}
             fullWidth
             style={{paddingLeft: 30}}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}