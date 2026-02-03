import React, { useEffect, useState } from 'react'
import "./App.css"
import shoes1 from "./assets/image1.png"
import shoes2 from "./assets/image2.png"
import shoes3 from "./assets/image.png"

const App = () => {

  const [shous, setShous] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(res => res.json())
      .then(data => {
        setShous(data);
      })
  }, []);

  return (
    <div className='main' style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}>
      <div className="cards">
        <div className="cards-cards">
          <div className="card">
            <img src={shoes1} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes1} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes1} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes1} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cards-cards">
          <div className="card">
            <img src={shoes2} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes2} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes2} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes2} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cards-cards">
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cards-cards">
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="card">
            <img src={shoes3} alt="" />
            <div className="texts">
              <div className="text">
                <p>Snickers Off-White</p>
                <p>2024</p>
                <p>NIKE</p>
                <p>$38.00</p>
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
