import Navbar from './components/navbar';
import Categories from './components/categories';
import Recommend from './components/recommend';
import Footer from './components/footer';
import Popular from './components/popular';
import Sale from './components/sale';
import Topic from './components/topic';




function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Sale></Sale>
      <Recommend></Recommend>
      <Topic></Topic>
      <Popular></Popular>
      <Footer></Footer>

    </div>
  )
}

export default App;
