
import moment from "moment";

const monthCounter = (start, end) => {
    let counter = 0;
    let ok = 0;
    const lengthiest = [1, 3, 5, 7, 8, 10, 12]; //months with 31 days
    const diffYears = Math.floor(
      moment
        .duration(
          moment([end.year, end.month + 1, end.day]).diff(
            moment([start.year, start.month, start.day])
          )
        )
        .asYears()
    );
    for (let i = 0; i < lengthiest.length; i++) {
      if (
        moment([start.year + diffYears, start.month, start.day]).isSameOrBefore(
          moment([start.year + diffYears, lengthiest[i], start.day])
        ) ||
        moment([end.year, lengthiest[i], end.day]).isBefore(
          moment([end.year, end.month + 1, end.day])
        )
      ) {
        counter++;
        if (lengthiest[i] === 1 || lengthiest[i] === 3) ok++;
      }
    }
    if (ok > 1) {
      if (end.year % 4 === 0) counter--;
      else counter = counter - 2;
    }
    console.log("counter: ", counter, " & ok value: ", ok);
    return counter; //returns how many 31-day months are between start & end
  };

  export default monthCounter;