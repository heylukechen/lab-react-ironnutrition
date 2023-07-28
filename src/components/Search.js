import { Divider, Input } from 'antd';

function Search(props) {
  const { searchFood } = props;

  return (
    <div style={{width:"100vw", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => {searchFood(e)}} />
    </div>
  );
}

export default Search;
