import './App.css';
import Check_useCallback from './example/Check_useCallback';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Class_comp_ex from './example/Class_comp_ex';
import Function_com_ex from './example/Function_com_ex';
import Hook_ex from './example/Hook_ex';
import Simple_form from './example/Simple_form';
import Navbar from './example/Navbar';
import CheckDyamic from './example/CheckDyamic';
import FormikValidation from './example/FormikValidation';

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


      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navbar />}>
            {/* <Route index element={<Class_comp_ex />}></Route> */}
            <Route path='/class_component' element={<Class_comp_ex name="Pass to class com" />}></Route>
            <Route path='/function_component' element={<Function_com_ex arr={person} bday="tirth" />}></Route>
            <Route path='/hook' element={<Hook_ex />}></Route>
            <Route path="/form" element={<Simple_form />}></Route>
            <Route path="/dynamicroute/:id" element={<CheckDyamic />}></Route>
            <Route path='/formikvalidation' element={<FormikValidation />} />
          </Route>
        </Routes>
      </BrowserRouter>




      {/* 
      <Class_comp_ex name="Pass to class com" />

      <Function_com_ex arr={person} bday="tirth" />

      <Hook_ex /> */}

      {/* <Simple_form /> */}


    </>
  );
}

export default App;
