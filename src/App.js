
import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Categories from './components/Categories';
import Video from './components/Video';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Card></Card>
      <Categories></Categories>
      
       <Video></Video>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
