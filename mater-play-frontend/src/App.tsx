import { useEffect, useState } from "react"
import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighLightSection from "./app/components/HighLightSection"
import Section from "./app/components/Section"
import { ICategory } from "./app/@libs/types"
import { CategoryService } from "./app/services/categories-services"

function App() {

  const[categories, setCategories] = useState<ICategory[]>([]);

  useEffect(()=>{
    CategoryService.getAll()
    .then(result =>{
      setCategories(result.data)
      console.log('>>>>>> RESULT: ', result)
    })
    .catch(error =>{
      console.log('>>>>>> DEU PAU:  ', error)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <main
      style={{
        marginTop:'8rem'
        }}>
        
      </main>
      <HighLightSection></HighLightSection>

      {
        categories.map(item => (
          <Section key ={item.id} title = {item.name}/>
        ))
      }

      <Section title='Recomendados para você'/>
      <Section title='Séries do momento'/>
      <Section title='Assistir com a família'/>

      
      <Footer/>
    </div>
  )
}

export default App