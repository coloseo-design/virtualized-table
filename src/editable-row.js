import React from 'react';
import { Form } from 'antd';
import { EditableContext } from './editable-context';

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <div className="tr" {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

export default EditableFormRow;
