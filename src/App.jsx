import { useState } from "react"
import { Card } from "./Card"


// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
const validaColorNome = (corNome) => {
  let withoutSpaces = corNome.trim();
  return withoutSpaces.length > 2 ? withoutSpaces : false
}

const validaColorHex = (cor) => {
  let withoutSpaces = cor.trim();
  let split = withoutSpaces.split("")
  console.log(split)
  console.log(split[0])
  return withoutSpaces.length > 5 && split[0] === "#" ? withoutSpaces : false;
}




function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [corNome, setCorNome] = useState("");
  const [cor, setCor] = useState("");
  const [cores, setCores] = useState([{nome: "Vermelho", cor: "#000000"}]);
  const [erro, setErro] = useState(false);

  const colocarCor = (event) => {
    event.preventDefault();

    const novaCor = {
      nome: corNome,
      cor: cor
    }

    if (!validaColorNome(corNome) || !validaColorHex(cor)) {
      setErro(true)
    }else{
      setCores([...cores, novaCor]);
      setCorNome('');
      setCor('');
    }
    
  }

  


  

  return (
   
    <div className="App">
      <div className="container">
      <h1 className="main-title">Adicionar Nova Cor</h1>
      <form onSubmit={colocarCor} className={erro? "erro-form" : ""}>

        <div className="inputBox">
          <label htmlFor="corNome">Nome</label>
          <input type="text" id="corNome" value={corNome} onChange={(event) => setCorNome(event.target.value)} />
        </div>

        <div className="inputBox">
          <label htmlFor="cor">Cor</label>
          <input type="text" id="corNome" value={cor} onChange={(event) => setCor(event.target.value)} />
        

          <button type="submit">Adicionar</button>
        </div>
      </form>
      </div>
      {
        erro ? (
          <span> O nome devem ser alterados</span>
        ) : null
      }

      <h1 className="second-title">Cores Favoritas</h1>
      
      {

        
        cores.map(
          cor => {
            return <Card colorData={cor} />
        })
      }
      
    </div>

    
   
   



  )
}

export default App