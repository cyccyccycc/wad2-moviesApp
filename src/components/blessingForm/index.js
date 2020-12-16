import React, {useContext } from "react";
import "./blessingForm.css";
import useForm from "react-hook-form";
import {PeoplesContext} from '../../contexts/peoplesContext'
import { withRouter } from "react-router-dom";

const BlessingForm = ({ people, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(PeoplesContext);

  const onSubmit = data => {
    context.addBlessing(people, data)
    history.push("/peoples/favorites");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your belsssing</h3>
      <div className="form-group">
        <input
          id='18'
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={people.blessing ? people.blessing.author : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your blessing"
          defaultValue={people.blessing ? people.blessing.content : ""}
          name="content"
          ref={register({
            required: "No blessing text",
            minLength: { value: 10, message: "Blessing is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(BlessingForm);