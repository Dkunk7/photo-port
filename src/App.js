import React, { useState } from 'react'; // Module said this should be in this file, but I added it bc it wasnt here
import './App.css';
import About from './components/About';
import Nav from "./components/Nav";
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
        name: 'commercial',
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    { name: `portraits`, description: `Portraits of people in my life` },
    { name: `food`, description: `Delicious delicacies` },
    {
        name: `landscape`,
        description: `Fields, farmhouses, waterfalls, and the beauty of nature`
    },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div> 
    <Nav 
      categories = {categories} 
      setCurrentCategory = {setCurrentCategory} 
      currentCategory = {currentCategory}
      contactSelected = {contactSelected} // This gets passed into the Nav component 
      setContactSelected = {setContactSelected} // This gets passed into the Nav component 
    ></Nav> 
      <main>
        {!contactSelected ? ( // This block acts as an if else statement
          <> {/* This is a react fragment, or <React.Fragment></React.Fragment> Use it to wrap everything and avoid creating extra divs */}
            <Gallery currentCategory = {currentCategory}></Gallery>
            <About></About>
          </>
        ) : ( // this is where the else starts
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
