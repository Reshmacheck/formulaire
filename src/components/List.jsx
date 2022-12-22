import date from "./date"
const List = ({propsdata}) =>{
  
  return <>
  {propsdata.map((objet,index)=> <div>
    <p>{date(objet.naissance)} ans</p>
    <p>{objet.nom} {objet.prenom}</p>
  
    </div> )}
  </>
  
}
export default List