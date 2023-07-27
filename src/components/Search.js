import { Divider, Input } from 'antd';

function Search(props) {
  const { searchFood } = props;

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => {searchFood(e)}} />
    </>
  );
}

export default Search;
