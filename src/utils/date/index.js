import moment from "moment";

export const formatDate = (dateString) => {
    const date = moment.utc(dateString).local(); // Convert the UTC date string to local timezone
    const today = moment().startOf('day').local(); // Get the start of today in local timezone
    const tomorrow = moment().add(1, 'day').startOf('day').local(); // Get the start of tomorrow in local timezone
  
    if (date.isSame(today, 'day')) {
      return `Today at ${date.format('h:mmA')}`;
    } else if (date.isSame(tomorrow, 'day')) {
      return `Tomorrow at ${date.format('h:mmA')}`;
    } else {
      return `${date.format('MMMM Do, YYYY h:mmA')}`;
    }
  };