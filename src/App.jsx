// import React, { useState } from 'react'



// function App() {
//   var [a,b] = useState(7);
//   return (
//     <div className='w-full h-screen bg-zinc-950 text-white'>
//       <h1>{a + 1}</h1>
//       <button onClick={() => b(a + 1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button>
//       <products />
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import products from './products';
// function App() {
//   var [ a, b ] = useState(69);
//   return (
//     <div className='w-full h-screen bg-zinc-900 text-white p-5'>
//       <products />
//     </div>
//   )
// }

// export default App

// **  **
// "use client"
// import React from 'react'
// import Header from './Header.jsx'
// function App() {
//   return (
    
//     <div>
//       <button className=" w-full px-3 py-1 bg-green-500 rounded-md text-xs space-x-10">
//         ZomoHeart
//       </button>
//       <div>
//         <nav className="w-full px-3 py-1 bg-green-500 rounded-md text-xs space-x-10">
//           Home
//         </nav>
//         <nav className="w-full px-3 py-1 bg-green-500 rounded-md text-xs space-x-10">
//           About
//         </nav>
//         <nav className="w-full px-3 py-1 bg-green-500 rounded-md text-xs space-x-10">
//           Service
//         </nav>
//         <nav className="w-full px-3 py-1 bg-green-500 rounded-md text-xs space-x-10">
//           Contact
//         </nav>
//       </div>
//       <button className="px-2 py-1 bg-blue-500 rounded-md text-xs">box1</button>
//       <div>
//         <button className="px-2 py-1 bg-red-500 rounded-md text-xs">
//           box2
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App

// import Header from "./Header";
// import Footer from "./Footer";
// import Food from "./Food";
// function App() {

//   return (
//     <>
//       <Header />
//       <Food />
//       <Food />
//       <Food />
//       <Footer />
//     </>
//   );
// }

// export default App

//* card component
// import Card from "./Card";


// function App() {
//   return (
//     <>
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </>
//   );
// }

// export default App

//* How to style react components with css
// *************** 
//* not including external frameworks or preprocessors

//* 1. External
//* 2. Module
//* 3. Inline

// import Button from "./Button";

// function App() {
  
//   return (<Button />);
// }
// export default App

// * props 
// * props = read only properties that are shared between components.
// * A parent component can send data to a child component.

// * <component key = vsalue />

//  import Student from "./Student";

//  function App() {
//    return (
//      <>
//        <Student name="Vishal" age={20} isStudent={true} mobile={709876542}  pin={841211} isIndian={true} />
//        <Student name="Golu" age={22} isStudent={false} mobile={709876549} pin={841211} isIndian={true}/>
//        <Student name="David" age={20} isStudent={true} mobile={709876546} pin={871211} isIndian={false} />
//        <Student name="Vijay" age={24} isStudent={false} mobile={709876548} pin={941291} isIndian={true} />
//        <Student name="Vokes" age={25} isStudent={true} mobile={709876541} pin={841200} isIndian={false}/>
       
//     </>
//   );
//  }
//  export default App

// * conditional rendering: allowsyou to control what gets rendered in your conditions (show,hide,or components)

// * rendering list in react-js

// import List from "./List"

// function App() {
//   return (
//     <>
//     <List />
//     </>
//     )
// }
// export default App

import List from "./List";

function App() {

   const fruits = [
     { id: 1, name: "apple", calories: 95 },
     { id: 2, name: "orange", calories: 45 },
     { id: 3, name: "banana", calories: 105 },
     { id: 4, name: "coconut", calories: 159 },
     { id: 5, name: "pineapple", calories: 37 },
   ];
  
   const vegetables = [
     { id: 6, name: "potatoes", calories: 110 },
     { id: 7, name: "tomatoes", calories: 15 },
     { id: 8, name: "celery", calories: 25 },
     { id: 9, name: "corn", calories: 63 },
     { id: 10, name: "broccoli", calories: 67 },
   ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="vegetables" />
    </>
  );

}

export default App