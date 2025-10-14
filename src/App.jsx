import CustomButton from './components/CustomButton'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  return (
    <>
      <h1>Hola Gente</h1>
      <CustomButton bgColor= "pink">Comprar el Miercoles</CustomButton>
      <NavBar bgColor= "Red" ></NavBar>
      <ItemListContainer bgColor="pink" >¡Elegí Wanderlast!</ItemListContainer>
    </>
  )
}

export default App