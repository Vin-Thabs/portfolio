import { useState } from "react";


function MyButton({count, clicked}) {
  return (
    <button onClick={clicked}>
      I'm button {count}
    </button>
  );
}

const user = {
  name: 'LIght', 
  imageURL: 'https://tse2.mm.bing.net/th/id/OIP.S8aUTLnyb-io1c7z9wPrnwHaJo?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  image_size: 50
}


//Rendering Lists

const products = [{id:1, tittle: "Hello World"},
                   {id:2, tittle: "Good Morning"},
                  {id: 3, tittle: "This is Light, Your Lovely Girl, :)"} ];

let items = products.map(product =>
  <li key={product.id}>
    {product.tittle}
  </li>
);

export default function App() {
    const [count, setCount] = useState(0);
    function handleClick ()
    {
     setCount(count + 1);
    }

    
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageURL} style={{height: user.image_size, width: user.image_size}} alt={"Photo of " + user.name }/>

      <MyButton count={count} clicked={handleClick} />
      <MyButton count={count} clicked={handleClick} />

      {/* Items list Rendering */}
      {items}
    </div>
  );
}