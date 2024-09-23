import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      {showCart && <Cart showCart={showCart} onShowCart={setShowCart} />}
      <Header onShowCart={setShowCart} />
      <Main />
      {/* <Footer /> */}
    </>
  );
};

export default App;
