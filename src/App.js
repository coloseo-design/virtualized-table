import React from 'react';
import Table from './table';
import EditableFormRow from './editable-row';
import EditableCell from './editable-cell';
import 'antd/dist/antd.css';

const list = [];
for (let i = 0; i < 5000; i++) {
  list.push({
    index: i,
    name: 'zhangsamn',
    age: i + 1,
    gender: i % 2 ? 'male': 'famale',
    postcode: '007',
    phone: '1281922392',
  })
}
const columns = [
  {
    title: '编号',
    dataIndex: 'index',
    key: 'index',
    width: 100,
    fixed: 'left',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    editable: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    // editable: true,
  },
  {
    title: '邮编',
    dataIndex: 'postcode',
    key: 'postcode',
    // editable: true,
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    key: 'phone',
    // editable: true,
  },
];
function App() {
  return (
    <div className="App">
      <Table
        height={500}
        rowHeight={50}
        bufferSize={5}
        dataSource={list}
        columns={columns}
        rowKey='index'
        tableLayout="fixed"
        rowClassName="row-class"
        scroll={{ x: 1800 }}
        components={
          {
            body: {
              row: EditableFormRow,
              cell: EditableCell,
            },
          }
        }
      />
    </div>
  );
}

export default App;
