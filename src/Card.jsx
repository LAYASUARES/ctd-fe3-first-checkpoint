
//Este componente deverá receber dados por Props e mostrar as Informações em Tela
export function Card (props) {


  

  return (
    <div className="component-inicial" style={{backgroundColor: props.colorData.cor}}>
      <p>{props.colorData.nome}</p>
      <p>{props.colorData.cor}</p>
    </div>
  )
}