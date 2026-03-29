


import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/NavBar'


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}
const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);



  return (
    <>
      <NavBar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          onClick={() => setActiveTab("model")}
          type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models" defaultChecked />
        <input
          onClick={() => setActiveTab("cart")}
          type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`}/>
      </div>
      {
        activeTab === "model" && <Models modelPromise={modelPromise}
          carts={carts} setCarts={setCarts} />
      }
      {
        activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />
      }
      <Footer />


    </>
  )
}

export default App
