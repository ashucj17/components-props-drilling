const Category = () => {
  return (
    <>
      <select className="filter__options">
        <option type="text" className="optons" value="All">
          All
        </option>
        <option type="text" className="optons" value="People">
          People
        </option>
        <option type="text" className="optons" value="Jobs">
          Jobs
        </option>
        <option type="text" className="optons" value="Posts">
          Posts
        </option>
        <option type="text" className="optons" value="Companies">
          Companies
        </option>
      </select>
    </>
  );
};

export default Category;
