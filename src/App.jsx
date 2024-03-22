import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };

  return (
    <>
      <h1>Form master</h1>
      <GrandPa></GrandPa>
      {/* <h3>Vite + react</h3> */}
      {/* <SimpleForm /> */}
      {/* <StateFullForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReuseableForm handleSubmit={handleSignUpSubmit} formTitle={"Sign up"}>
        <div>
          <h3>Sign up</h3>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm>

      <ReuseableForm
        handleUpdateProfile={handleUpdateProfile}
        formTitle={"Profile update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h3>Update profile</h3>
          <p>Always keep your profile</p>
        </div>
      </ReuseableForm>
    </>
  );
}

export default App;
