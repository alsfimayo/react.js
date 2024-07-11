import './App.css';


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* if we comment out our components props,then our defaultProps vlaue compleie */}
    
<Navbar title='react.Js' about='about reactjs'/>
<div className="container my-3">

<TextForm heading='enter your text here'/>
</div>


    </>

  );
}

export default App;
