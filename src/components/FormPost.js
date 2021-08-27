import React from "react";
import { Formik } from "formik";
import { useMutation } from "react-query";

import { addPost } from "../api/PostApi";

function FormPost() {
  const { mutateAsync, isLoading } = useMutation(addPost);

  return (
    <div>
      <Formik
        initialValues={{
          body: "",
          username: "vyhungle",
          email: "lnhv.26112000@gmail.com",
        }}
        onSubmit={(values) => {
          mutateAsync(values);
        }}
      >
        {(formProps) => (
          <div>
            <input
              name="body"
              value={formProps.values.body}
              onChange={formProps.handleChange}
            />
            <button type="submit" onClick={() => formProps.handleSubmit()}>
              Add Post
            </button>
            {isLoading && <p>loading...</p>}
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormPost;
