/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ReuseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
  childreen,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      {childreen}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="enter you name" />
        <br />
        <input type="email" name="email" placeholder="enter your email" />
        <br />
        <input
          placeholder="enter your password"
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;
