import '../filter.css'
const Category = () => {
  return (
    <>
      <select className="filter__options">
        <option type="text" className="options" value="All">
          All
        </option>
        <option type="text" className="options" value="People">
          People
        </option>
        <option type="text" className="options" value="Jobs">
          Jobs
        </option>
        <option type="text" className="options" value="Posts">
          Posts
        </option>
        <option type="text" className="options" value="Companies">
          Companies
        </option>
      </select>
    </>
  );
};

export default Category;
