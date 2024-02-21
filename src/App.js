import './App.css';
import Class_comp_ex from './Class_comp_ex';
import Function_com_ex from './Function_com_ex';

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
    }
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
      {/* <Function_com_ex arr={person} bday="tirth" /> */}

    </>
  );
}

export default App;
