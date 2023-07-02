import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/authentication/authentication.components";
import SignUpForm from "./components/sign-up-form/sign-up-form.components";
import Shop from "./shop/shop.components";
import CheckOut from "./components/checkout/checkOut.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
