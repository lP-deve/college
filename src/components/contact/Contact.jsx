import './Contact.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  number: yup
    .number()
    .typeError("Guest number must be a number")
    .required("Number of guests is required")
    .positive("Guest number must be positive")
    .integer("Guest number must be an integer"),
   date: yup
  .date()
  .transform((value, originalValue) => {
    return originalValue === "" ? undefined : value;
  })
  .required("Date is required"),

  time: yup.string().required("Time is required")
});

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    alert("Table booked successfully!");
    reset();
  };

  return (
    <div className="contact">
      <div className="img">
        <img src="qinkali.jpeg" alt="Khinkali" />
      </div>

      <div className="forms">
        <h2>Book a Table</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")}  placeholder='Enter Your Name'   className={errors.name ? "error-input" : ""}/>
            <p className="error">{errors.name?.message}</p>
          </div>

          <div className="input">
            <label htmlFor="number">Number of Guests</label>
            <input type="text" id="number" placeholder='Enter Guest Number' {...register("number")}   className={errors.number ? "error-input" : ""} />
            <p className="error">{errors.number?.message}</p>
          </div>

          <div className="inp">
            <div className="date">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" {...register("date")}  className={errors.date ? "error-input" : ""} />
              <p className="error">{errors.date?.message}</p>
            </div>

            <div className="time">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" className={errors.time ? "error-input" : ""} {...register("time")}  />
              <p className="error">{errors.time?.message}</p>
            </div>
          </div>

          <button type="submit" className="book-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};
