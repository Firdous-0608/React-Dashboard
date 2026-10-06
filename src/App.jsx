import { BrowserRouter, Routes , Route } from "react-router-dom";
function App(){
  <BrowserRouter>
  <Sidebar/>
  
  <div className="content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  </div>
  </BrowserRouter>


}
export default App;