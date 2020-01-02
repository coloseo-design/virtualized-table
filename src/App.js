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
    phone2: '1281922392',
    phone3: '1281922392',
    phone4: '1281922392',
    phone5: '1281922392',
    phone6: '1281922392',
    phone7: '1281922392',
    phone8: '1281922392',
    phone9: '1281922392',
    phone10: '1281922392',
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
    width: 200,
    editable: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    width: 200,
    editable: true,
  },
  {
    title: '邮编',
    dataIndex: 'postcode',
    key: 'postcode',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    key: 'phone',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码1',
    dataIndex: 'phone1',
    key: 'phone1',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码2',
    dataIndex: 'phone2',
    key: 'phone2',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码3',
    dataIndex: 'phone3',
    key: 'phone3',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码4',
    dataIndex: 'phone4',
    key: 'phone4',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码5',
    dataIndex: 'phone5',
    key: 'phone5',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码6',
    dataIndex: 'phone6',
    key: 'phone6',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码7',
    dataIndex: 'phone7',
    key: 'phone7',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码8',
    dataIndex: 'phone8',
    key: 'phone8',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码9',
    dataIndex: 'phone9',
    key: 'phone9',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码10',
    dataIndex: 'phone10',
    key: 'phone10',
    width: 200,
    editable: true,
  },
  {
    title: '手机号码11',
    dataIndex: 'phone11',
    key: 'phone11',
    width:200,
    editable: true,
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
