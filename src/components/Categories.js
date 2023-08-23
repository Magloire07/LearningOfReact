import './styles/Categories.css'


function Categories({FiltrerCat,categories}){
    return(
        <div className='lmj-categories'>
      <select onChange={(e)=>FiltrerCat(e.target.value)} className='lmj-categories-select'>
        <option value="">none</option> 
        {categories.map((cat)=>(<option key={cat} value={cat} >{cat}</option>))}
      </select>
      <button onClick={() => FiltrerCat(" ")}>Réinitialiser</button>

      </div>
    )
}

export default Categories