import './styles.css'


export default function App() {
  return (
  <>
  <form className="new-item-form">
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input type="text" id="item"></input>
    </div>
  </form>
  <h1 className='header'>ToDo List</h1>
  </>
  )
}