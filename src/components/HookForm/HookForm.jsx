import useInputState from "../../hook/useinputState";

const HookForm = () => {
  //   const [name, handleNameChanged] = useInputState("Roza");
  const emailState = useInputState("rojoni@sojoni.go");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChanged}
          type="text"
          name="name"
          placeholder="enter you name"
        /> */}
        <br />
        <input
          {...emailState}
          type="email"
          name="email"
          placeholder="enter your email"
        />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
