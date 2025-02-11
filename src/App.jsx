import React, {lazy,Suspense} from "react";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyList = lazy(()=>import('./components/PropertyList'));
const PropertyDetail =lazy(()=>import('./components/PropertyDetail'));


const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
        <Routes>
        <Route path="/" element={<PropertyList/>}/>
        <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
        
        
        </Suspense>
        </Router>



    </div>
  );
};

export default App;


//npm run dev