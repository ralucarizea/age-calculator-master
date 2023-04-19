import * as yup from "yup";
const schema = yup.object().shape({
    day: yup
      .number()
      .positive("Please insert a valid number")
      .integer("Please insert a valid number")
      .min(1, "Must be a valid day")
      .max(31, "Must be a valid day")
      .required("This field cannot be empty")
      .typeError("This field cannot be empty"),
    month: yup
      .number()
      .positive("Please insert a valid number")
      .integer("Please insert a valid number")
      .min(1, "Must be a valid month")
      .max(12, "Must be a valid month")
      .required("This field cannot be empty")
      .typeError("This field cannot be empty"),
    year: yup
      .number()
      .positive("Please insert a valid number")
      .integer("Please insert a valid number")
      .lessThan(2022, "Must be in the past")
      .moreThan(1900, "Must be more recent")
      .required("This field cannot be empty")
      .typeError("This field cannot be empty"),
  });

  export default schema;