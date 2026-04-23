// WE ARE NOT IMPORTING FROM /PAGES RIGHT NOW
import { Routes, Route } from "react-router-dom";

// We define the pages right here in this file to test
const HomeTest = () => <h1 style={{padding: '50px', textAlign: 'center'}}>Home is Working!</h1>;
const ShopTest = () => <h1 style={{padding: '50px', textAlign: 'center'}}>Shop is Working!</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeTest />} />
      <Route path="/shop" element={<ShopTest />} />
    </Routes>
  );
}

export default App;