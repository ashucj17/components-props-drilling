import '../filter.css'
const Country = () =>{
    return(
        <>
      <select className="filter__options">
        <option type="text" className="optons" value="All">
          All
        </option>
        <option type="text" className="optons" value="India">
          India
        </option>
        <option type="text" className="optons" value="USA">
          USA
        </option>
        <option type="text" className="optons" value="Germany">
          Gremany
        </option>
        <option type="text" className="optons" value="Japan">
          Japan
        </option>
      </select>
    </>
    )
}

export default Country