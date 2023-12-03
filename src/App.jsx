import { useState } from 'react'
import './App.css'
import ProductCard from './Productcard';

function App() {
  // Inside cart details
  // Cart Image and details
 const data = [
   {

     productImage:
     "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
     productName:"Fancy product",
     price:"$40.00 - $80.00"

   },
   {
     productImage:
     "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         productName: "Special Item",
         Rating:"⭐⭐⭐⭐⭐",
         price:"$20- $18.00"
     },
     {
       productImage:
       "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
       productName:  "Sale Item",
       price:"$50.00- $25.00"
     },
     {
      productImage:
       "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
       productName:  "Popular Item",
       Rating:"⭐⭐⭐⭐⭐",
       price:"$40.00"
    },

    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName:"Sale Item",
      price:"$50.00- $25.00"
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName:"Fancy Product",
          price:"$120.00- $280.00"
      },
      {
        productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName:  "Special Item",
        Rating:"⭐⭐⭐⭐⭐",
        price:"$20- $18.00"
      },
      {
       productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName:  "Popular Item",
        Rating:"⭐⭐⭐⭐⭐",
        price:"$40.00"
     },
  ];
  // Using states for images and to change the value of cart
    
  const [product, setProduct] = useState(data)
  const [incart, setIncart] = useState(0)

  return <div className="app">
  {/* Nav bar content  */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div className="container-fluid">
      <a className="navbar-brand mx-4 " href="#">Strat bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">All products</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#">Popular items</a></li>
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
        {/* Cart button */}
        <div className="d-flex mx-auto">
        <button className="d-flex px-5 btn align-items-sm-center">Cart {incart}</button>
        </div>
      </div>
    </div>
  </nav>
   {/* Shop content */}
    <div className = "head">
      <div>
      <h1 className="word">Shop  in  style </h1>
    <span className="content">With this shop home page template</span>
      </div>
    </div>
    <div className="gap"></div>
    {/* Setting props to productcard */}
    {
      data.map((prod, idx)=>(
        <ProductCard
        key={idx}
         productImg={prod.productImage}
        productName={prod.productName}
        price={prod.price}
        Rating={prod.Rating}
        incart={incart}
        setIncart={setIncart}
         />
         ))
    }

    {/* Footer content */}
      <div className="page-end">
        <h6>Copyright © Your Website 2023</h6>
      </div>
  </div>;
}

export default App
