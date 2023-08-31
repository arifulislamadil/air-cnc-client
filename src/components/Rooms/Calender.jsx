import { DateRange } from "react-date-range";

const DatePicker = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={["#f43f5e"]}
      ranges={[value]}
      onChange={handleSelect}
      date={value.startDate}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate= {value.endDate}

    />
  );
};

export default DatePicker;
