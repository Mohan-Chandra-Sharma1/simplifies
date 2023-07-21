import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import { Dropdown } from 'rsuite';

const DropDown = () => (
    
  <Dropdown title="Artificial intelligence">
    <Dropdown.Item>Artificial intelligence</Dropdown.Item>
    <Dropdown.Item>Libraries</Dropdown.Item>
    <Dropdown.Item>Happiness</Dropdown.Item>
    {/* <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>About</Dropdown.Item> */}
  </Dropdown>
);

export default DropDown;


