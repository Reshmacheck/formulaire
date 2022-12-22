const date = (birth) => {
    // console.log(naissance)
    const naissance= new Date(birth)

    // console.log(newdate)
    const millis = Date.now() - new Date(birth) 
    return Math.floor(millis / 1000 / 60 / 60 / 24 / 365);
  }
  export default date