// import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Signin from './components/signin/Signin';

function App() {
  return (
    <>
      <Header />
      <main classname="main-content  mt-0">
        <Signin />

      </main>
      <Footer />

    </>
  );
}

export default App;
