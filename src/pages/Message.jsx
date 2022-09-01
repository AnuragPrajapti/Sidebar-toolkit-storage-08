import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/NoteContext'
import { Button, Modal, Dropdown, Menu, message, Space, MenuProps } from 'antd';
import './Message.css'
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';



const Messages = () => {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle('Messages Here!!')
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = ({ key }) => {
   message.info(`Click on item ${key}`);
  };
   
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Home Changer',
          key: '1',
        },
        {
          label: 'Portable Changer',
          key: '2',
        },
        {
          label: 'Ather Grid',
          key: '3',
        },
      ]}
    />
  );



  return (
    <>
      <div className="wrapper">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Ather Energy" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Click menu item
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
            <div>
              
            </div>
        </Modal>
      </div>
    </>
  )
}

export default Messages
