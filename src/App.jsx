import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, Footer, Hero, Process, Services} from './container';
import { Menu } from './components';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
 
    
    <Process />
    
    <Testimonials />
   
    <Footer />
  </div>
);

export default App;
