import React from 'react'
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App=()=>{
  return(
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;