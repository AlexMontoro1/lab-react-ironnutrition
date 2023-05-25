import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({searchFood}) {

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        searchFood(event.target.value.toLowerCase())
    }
    
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;