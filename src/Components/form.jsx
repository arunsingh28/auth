import React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  //   set state to disable the submit button
  const [state, setState] = React.useState(true);
  if (name.length < 1 || password.length < 1) {
    setState(false);
  }
  const handleForm = (e) => {
    e.preventDefault();

    //   change btn state to true
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="login" disabled={state} />
      </form>
    </div>
  );
};

export default Form;
