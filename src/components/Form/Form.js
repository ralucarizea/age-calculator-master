import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import "../../assets/fonts/fonts.css";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import schema from '../../validation/validation'

export default function Form({ formData, setInputData }) {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      day: "- -",
      month: "- -",
      year: "- -",
    },
  });

  const [input, setInput] = useState("");

  const onSubmit = (info) => {
    if (moment([info.year, info.month - 1, info.day]).isValid()) {
      setInputData(info);
    } else {
      setError("day", {
        type: "custom",
        message: "Must be a valid date",
      });
    }
  };

  return (
    <>
      <form
        className="card-form"
        onSubmit={handleSubmit(onSubmit)}
        id="age-form"
      >
        <label htmlFor="day" className="form__label">
          DAY
        </label>
        <input
          id="day"
          className={(errors.day !== undefined && errors.day?.message !=='') ? "form__input error__input" : "form__input"}
          type="number"
          name="day"
          placeholder="DD"
          onChange={(e) => setInput({ day: e.target.value })}
          value={input.day}
          {...register("day")}
        />
        <p className="error">{errors.day?.message} </p>
        <label htmlFor="month" className="form__label">
          MONTH
        </label>
        <input
          id="month"
          className={(errors.month !== undefined && errors.month?.message !=='') ? "form__input error__input" : "form__input"}
          type="number"
          name="month"
          placeholder="MM"
          onChange={(e) => setInput({ ...input, month: e.target.value })}
          value={input.month}
          {...register("month")}
        />
        <p className="error"> {errors.month?.message} </p>
        <label htmlFor="year" className="form__label">
          YEAR
        </label>
        <input
          id="year"
          className={(errors.year !== undefined && errors.year?.message !=='') ? "form__input error__input" : "form__input"}
          name="year"
          type="number"
          placeholder="YYYY"
          onChange={(e) => setInput({ ...input, year: e.target.value })}
          value={input.year}
          {...register("year")}
        />
        <p className="error"> {errors.year?.message} </p>
      </form>
      <section className="card__button-container">
        <hr className="card__breakingLine" />
        <button form="age-form" type="submit" className="card__button">
          <div className="card__button-image" />
        </button>
      </section>
    </>
  );
}
