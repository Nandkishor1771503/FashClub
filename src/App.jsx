import { useState } from "react";
import Header from "./components/header";
import Cards_sec from "./components/Cards_sec"
import Highlights from "./components/Highlights";
import "./App.css";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Whatsapp_icon from "./components/Whatsapp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main>

       <section id="product">
       <Cards_sec />
       </section>
       <div className="my-10">
        <Highlights />
       </div>

      </main>
      <Video/>

      <footer>
        <Footer/>
      </footer>
      <Whatsapp_icon/>
    </>
  );
}

export default App;
