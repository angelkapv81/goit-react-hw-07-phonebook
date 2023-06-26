import { GlobalStyle } from './GlobalStyle';
import Form from './Form/Form';
import Search from './Search/Search';
import Contacts from './Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login ';
import Mycontacts from './Pages/Mycontacts';
// import Header from './Header/Header';
import Layout from './Layout/Layout';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="mycontacts" element={<Mycontacts />} />
        </Route>
      </Routes>
      {/* <Form />
      <Search />
      <Contacts />
      <GlobalStyle /> */}
    </section>
  );
}

export default App;
