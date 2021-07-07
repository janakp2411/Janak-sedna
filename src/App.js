import React, { useEffect, useState } from 'react';
import Input from './Component/Input';
import List from './Component/List';
import './App.css';

const App = () => {

  const [listData, updateListData] = useState([]);
  const [filterTerm, updateFilterterm] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listData'));
    if(data){
      updateListData(data)
    } else {
      return fetch("https://my.api.mockaroo.com/movies.json?key=bf3c1c60")
      .then(res => res.json())
      .then(res => {
        updateListData(res);
        localStorage.setItem('listData', JSON.stringify(res));
      });
    }

  }, []);

  const onFilterChange = (e) => {
    updateFilterterm(e.target.value)
  }

  const onAddTag = (name, index) => {
    const activeList = listData[index].tags || [];
    activeList.push(name)
    listData[index].tags = [...activeList];
    updateListData([...listData])
    localStorage.setItem('listData', JSON.stringify(listData));
  }

  const onDeletetag = (listIndex, tagIndex) => {
    const activeList = listData[listIndex].tags;
    activeList.splice(tagIndex, 1)
    listData[listIndex].tags = [...activeList];
    updateListData([...listData]);
    localStorage.setItem('listData', JSON.stringify(listData));
  }

  const data = filterTerm ? listData.filter(data => {
    return data.tags && data.tags.find(tag => tag.includes(filterTerm))
  }) : listData

  return (
    <div className="app">
        <div className="app-header">
            <div className="app-header-input-field">
                <Input placeholder="&#xF002; Search Tag" type="text" value={filterTerm} onChange={onFilterChange}  />
            </div>
        </div>
        {
          data.length ? data.map((item , i) => <List onAddTag={onAddTag} onDeletetag={onDeletetag} key={i} index={i} {...item}/>) : <div>No List</div>
        }
    </div>
  );
}

export default App;
