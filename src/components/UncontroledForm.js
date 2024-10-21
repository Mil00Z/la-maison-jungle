function UncontroledForm() {


  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">Des News Fraîches ?</label>
    <input type='email' name='email' placeholder='Votre e-mail' />
    <button type='submit' className="btn btn-go">Go !</button>
  </form> )



function handleSubmit(e) {

  e.preventDefault();

  alert(e.target['email'].value)
}


}

export default UncontroledForm