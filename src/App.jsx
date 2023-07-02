import React, { useState, useEffect } from 'react';
import MenuDropdown from "./components/menu"
import RadioGroup from "./components/radioGroup";
import Buttons from './components/button';
import Sidebar from './components/sidebar';
function App() {
  const radioFilters = [
    {
        label: 'Hepsi',
        value: 'all'
    },
    {
        label: 'Favorites',
        value: 'favorite'
    }
    
]
  const [radioFilter, setRadioFilter] = useState(radioFilters[0])
  const [radioValue, setRadioValue] = useState('all')


  useEffect(() => {
    async function handleChange() {
        const filter = radioFilters.filter(x => x.value === radioValue)
        setRadioFilter(filter[0])
        
    }

    handleChange()
}, [radioValue])

  const items = [
    {
      name: "Deneme",
      icon: "deneme",
      click: () => {
        console.log("deneme")
      }
    },
    {
      name: "Deneme2",
      icon: "deneme2",
      click: () => {
        console.log("deneme2")
      }
    },
  ]
  const click = () => {
    setOpen(!open)
  }
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} name='Deneme'></Sidebar>
      <div>
        <Buttons click={click} color='#8674fa' name='Deneme'></Buttons>
      </div>
      <MenuDropdown items={items}></MenuDropdown>
      <RadioGroup onChange={(e) => {setRadioValue(e)}} initialState={radioFilter.value} options={radioFilters}></RadioGroup>
    </div>
  );
}

export default App;
