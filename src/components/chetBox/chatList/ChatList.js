import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import Anurag from '../../../Images/Anurag.jpeg'
export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://picsum.photos/200/300/?blur=2",
      id: 1,
      name: "Snajye Gupta",
      active: true,
      isOnline: true,
    },
    {
      image:
        'https://picsum.photos/200/300.webp',
      id: 2,
      name: "Prakhar Jain",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://picsum.photos/200/300.jpg",
      id: 3,
      name: "Markand Dighe",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://picsum.photos/id/870/200/300?grayscale&blur=2",
      id: 4,
      name: "Pushpraj Singh",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://picsum.photos/200/300/?blur=2",
      id: 5,
      name: "Sourabh Dasoundhi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://picsum.photos/200/300?grayscale",
      id: 6,
      name: "Narendra Kushwah",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://picsum.photos/seed/picsum/200/300",
      id: 7,
      name: "Kishan Singh",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://picsum.photos/id/237/200/300",
      id: 8,
      name: "Dheeraj Pal",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://picsum.photos/200",
      id: 9,
      name: "Umesh Patel",
      active: false,
      isOnline: true,
    },
    {
      image: "https://picsum.photos/200/300",
      id: 10,
      name: "Yuvraj Singh",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats : this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
