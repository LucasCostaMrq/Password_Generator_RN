import { NavigationContainer } from "@react-navigation/native"
import { Routes } from './src/routes'

export default function App(){
  
  return(
    <NavigationContainer>
      <Routes/>    
    </NavigationContainer>
  )
}

//criando uma estilização própria para cada componente