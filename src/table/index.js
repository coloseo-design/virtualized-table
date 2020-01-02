import React from 'react';
import './table.css';

// 设置缓冲区大小，请设置合理的值
const sortKey = `$index$`;
export default class TableTest extends React.Component {
  state = {
    startIndex: 0,
  }
  onScroll = (e) => {
    const offsetY = e.target.scrollTop;
    const { rowHeight } = this.props;
    const { startIndex } = this.state;
    const currentStartIndex = Math.floor(offsetY / rowHeight);
    if (startIndex !== currentStartIndex) {
      this.setState({
        startIndex: currentStartIndex,
      });
    }
  }
  // key generater
  onKey = (row) => {
    const { rowKey } = this.props;
    if (typeof rowKey === 'string') {
      return row[rowKey];
    } else {
      return rowKey(row);
    }
  }
  // row render method.
  onCell = (record, column) => {
    if (column.render) {
      return column.render(record);
    } else {
      return record[column.dataIndex];
    }
  }
  renderHeader = () => {
    const { columns } = this.props;
    return columns.map(column => {
      const style= {};
      const { width, onHeaderCell, key, dataIndex } = column;
      const _key = key ? key : dataIndex;
      if (width) {
        Object.assign(style, {
          width,
          flex: 'none',
        });
      }
      return (<div className="th" key={`${_key}`} style={style}>{onHeaderCell ? onHeaderCell(column) : column.title}</div>);
    });
  }
  renderPlainRows = (dataSource) => {
    const { rowClassName, columns, rowHeight } = this.props;
    return dataSource.map((record) => {
      const style = {
        height: rowHeight,
        top: rowHeight * record[sortKey],
      };
      return (
        <div key={this.onKey(record)} className={`${rowClassName} g-table-row ant-table-row editable-row`} style={style}>
          {
            columns.map(column => {
              const style= {};
              const { width, key, dataIndex } = column;
              const _key = key ? key : dataIndex;
              if (width) {
                Object.assign(style, {
                  width,
                  flex: 'none',
                });
              }
              return (<div key={`${_key}`} className='td' style={style}>{this.onCell(record, column)}</div>);
            })
          }
        </div>
      )
    })
  }
  renderCustomizedRlows = (dataSource) => {
    const { components, columns, rowHeight, rowClassName } = this.props;
    const { body: { row: Row, cell: Cell } } = components;
    return dataSource.map((record) => {
      const style = {
        height: rowHeight,
        top: rowHeight * record[sortKey],
      };
      return (
        <Row
          key={this.onKey(record)}
          className={`${rowClassName} g-table-row ant-table-row editable-row`}
          style={style}
        >
          {
            columns.map(column => {
              const { editable, width, key, dataIndex } = column;
              const _key = key ? key : dataIndex;
              const tdStyle= {};
              if (width) {
                Object.assign(tdStyle, {
                  width,
                  flex: 'none',
                });
              }
              if (editable) {
                return (
                  <div className="td" key={`${_key}`} style={tdStyle}>
                    <Cell record={record} {...column}>{this.onCell(record, column)}</Cell>
                  </div>
                )
              }
              return <div className="td" key={`${_key}`} style={tdStyle}>{this.onCell(record, column)}</div>
            })
          }
        </Row>
      )
    })
  }
  render() {
    const { height, rowHeight, dataSource, components } = this.props;
    const { startIndex } = this.state;

    const maxHeight = dataSource.length * rowHeight;
    const bufferSize = this.props.bufferSize || 0;

    const contentSize = Math.ceil(height / rowHeight);

    const _startIndex = startIndex > bufferSize
                        ? startIndex-bufferSize
                        : 0;

    const _endIndex   = startIndex > bufferSize
                        ? startIndex + contentSize + bufferSize
                        : contentSize + 2 * bufferSize;

    const sliceDataSource = dataSource.slice(_startIndex, _endIndex);
    const renderDataSource = sliceDataSource.map((item, index) => ({
      ...item,
      [sortKey]: _startIndex + index,
    }));
    let rows = components && components.body
      ? this.renderCustomizedRlows(renderDataSource)
      : this.renderPlainRows(renderDataSource);
    return (
      <div className="g-table">
        <div className="tb-head">
          {this.renderHeader()}
        </div>
        <div className="tb-body ant-table-content" style={{ height, overflow: 'hidden auto', willChange: "transform" }} onScroll={this.onScroll}>
          <div className="tb-body-wrapper ant-table-body" style={{ height: maxHeight, position: 'relative' }}>
            {
              rows
            }
          </div>
        </div>
      </div>
    );
  }
}
