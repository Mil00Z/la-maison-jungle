import { useState } from 'react';

function ControledForm() {

  const [inputValue, setInputValue] = useState(''); 

  const QuestionForm = (e) => {

    setInputValue(e.target.value);

}

const CheckValue = (value) => {

    if (!value.includes('f')){
      setInputValue(value)
      console.log(inputValue);
    } else {
      console.warn('--- contains f ---');
      console.warn(inputValue)
    }

}

let errortext = "Format d'input invalide !"

  return (
  <form>
    <label htmlFor="text">Du texte</label>
    <input type='text' name='text' placeholder='Tapez votre merde de texte' onChange={(e)=> CheckValue(e.target.value)} />
    <button type='submit' className="btn btn-go" onClick={()=> alert(inputValue)}>Alarma</button>
  </form> )

}

export default ControledForm