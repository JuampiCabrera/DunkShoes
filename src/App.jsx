
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar 
      colorTitle= "#f1c40f"
      display= "flex"
      flexDirection= "row"
      justify-content= "space-around"
      alignItems= "center"
      color="#4a235a "
      width= "100vw"
      height= "10em"
      textAlign= "center"
      margin= ".2em"
      padding= ".2em"
      />
      <ItemListContainer
      color= "#f1c40f"
      width= "50em"
      height= "30em"
      border= ".2em, solid, #f1c40f"
      display= "flex"
      alignItems= "center"
      justifyContent= "center"
      flexDirection= "column"
      />
    </>
  )

}


export default App
