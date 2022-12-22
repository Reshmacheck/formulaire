const Form = ({propssetdata,propsdata}) =>{
     const handlesubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(e.currentTarget)
        const objet ={
            nom: formData.get("nom"),
            prenom: formData.get("prenom"),
            naissance: formData.get("naissance")
        }
        let clone = [...propsdata]
        clone.push(objet)
        propssetdata(clone)
        
        
     }


  return <form method="post" onSubmit={handlesubmit}>
    <input type="text" name="nom" />
  <input type="text" name="prenom" />
  <input type="date" name="naissance" />
  <input type="submit" value="go" />
  
</form>}
export default Form