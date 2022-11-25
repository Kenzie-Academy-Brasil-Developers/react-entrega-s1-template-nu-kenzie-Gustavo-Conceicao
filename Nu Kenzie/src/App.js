import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main/Main";
import { useState } from "react";



function App() {
  const [pages, setUsePages] = useState(true)
   
  return (
    <div className='App'>
      {pages ? <Landing setUsePages={setUsePages}/> : <Main setUsePages={setUsePages}/>}
    </div>
  );
}

export default App;
