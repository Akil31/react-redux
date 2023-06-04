// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsDetails from './Component/ProductsDetails';
import ProductsListing from './Component/ProuctsListing';
import AddtoCard from './Component/AddtoCard';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Login } from './Component/Login';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ProductsComponent from './Component/ProuductsComponent';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" >
            <ProductsDetails />
          </Route>
          <Route path="/products">
            <ProductsListing />
          </Route>
          <Route path="/add/:productId">
            <AddtoCard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        {/* <AddtoCard /> */}

        {/* <Route>404 Not Found !</Route> */}
        {/* <div className='mb-5 pb-5'></div>
        <div className='mb-5 pb-5'></div> */}
        <Footer />
      </BrowserRouter>
      {/* <AddtoCard /> */}

      {/* <ProductsListing/> */}
      {/* <ProductsDetails/> */}
      {/* <prodcut_reducer/>   */}
      {/* <ProductsComponent/> */}
    </div>
  );
}

export default App;
