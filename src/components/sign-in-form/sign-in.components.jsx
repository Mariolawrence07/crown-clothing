import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.components";
import "./sign-in.styles.scss";
import Button from "../button/button.components";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      //   setcurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // await createUserDocumentFromAuth(user);
    // // setcurrentUser(user)
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Hi sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit"> Sign IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            {" "}
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
