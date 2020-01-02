import React from 'react';
import { Form, Select, Input } from 'antd';
import { EditableContext } from './editable-context';

class EditableCell extends React.Component {
  renderCell = (form) => {
    this.form = form;
    const {
      record,
      dataIndex,
    } = this.props;

    const configure = {
      initialValue: record[dataIndex],
      rules: [],
    };
    return (
      <Form.Item style={{ margin: 0 }}>
      {form.getFieldDecorator(`${dataIndex}`, configure)(
        <Select placeholder="请选择">
          <Select.Option value="10">10</Select.Option>
          <Select.Option value="20">20</Select.Option>
          <Select.Option value="30">30</Select.Option>
          <Select.Option value="40">40</Select.Option>
          <Select.Option value="50">50</Select.Option>
          <Select.Option value="60">60</Select.Option>
          <Select.Option value="70">70</Select.Option>
          <Select.Option value="80">80</Select.Option>
          <Select.Option value="90">90</Select.Option>
          <Select.Option value="100">100</Select.Option>
        </Select>
      )}
    </Form.Item>
    );
    return dataIndex === 'gender' ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(`${dataIndex}`, configure)(
          <Select placeholder="请选择">
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="famale">famale</Select.Option>
          </Select>
        )}
      </Form.Item>
    ) : (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(`${dataIndex}${record.index}`, configure)(
          <Input placeholder="请选择" />
        )}
      </Form.Item>
    );
  };

  render() {
    const {
      editable,
      edit,
      dataIndex,
      value,
      type,
      children,
      ...restProps
    } = this.props;
    return (
      <div {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </div>
    );
  }
}

export default EditableCell;
