import './App.css';

import Class_comp_ex from './example/Class_comp_ex';
import Function_com_ex from './example/Function_com_ex';
import Hook_ex from './example/Hook_ex';

function App() {

  const person = [
    {
      id: 1,
      first_name: "tirth",
      age: "16"
    },
    {
      id: 2,
      first_name: "gajjar",
      age: "17"
    },

  ]



  const main_class = [
    {
      id: 1,
      fname: "tirth",
      lname: "gajjar"
    },

    {
      id: 2,
      fname: "Bhavesh",
      lname: "Gandhi"
    }
  ]


  return (
    <>





      <Class_comp_ex name="Pass to class com" />

      <Function_com_ex arr={person} bday="tirth" />

      <Hook_ex />

    </>
  );
}

export default App;
