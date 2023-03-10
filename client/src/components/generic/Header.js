import React from 'react';
import { Layout, Button, Dropdown, Space } from 'antd';
import '../../assets/scss/header.scss';

const { Header: AntHeader } = Layout;

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        log in
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        sign up
      </a>
    ),
  },
];
// const items2 = [
//   {
//     key: '3',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         log in
//       </a>
//     ),
//   },
//   {
//     key: '4',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         sign up
//       </a>
//     ),
//   },
// ];
// const items3 = [
//   {
//     key: '5',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         log in
//       </a>
//     ),
//   },
//   {
//     key: '6',
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         sign up
//       </a>
//     ),
//   },
// ];

export default function Header() {
  return (
    <AntHeader
      className="header"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <h2>Language Exchange</h2>
      <div className="nav" style={{ marginLeft: '0' }}>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <Button>Dashboard</Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <Button>Users management</Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <Button>Search for users</Button>
            </Dropdown>
          </Space>
          <Space wrap></Space>
        </Space>
      </div>
    </AntHeader>
  );
}

//🍉
