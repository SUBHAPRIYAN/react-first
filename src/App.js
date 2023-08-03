import Table from "./component/Table";
import List from "./component/List";
import Moose from "./component/Moose";
import './App.css';

export default function App(){
  return(
    <div className="App">
      <Moose/>
      <Table/>
      <List/>
    </div>
  );
}