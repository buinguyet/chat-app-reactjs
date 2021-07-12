import React from "react";
import ConversationComponent from "../../components/Conversation/conversation";

const ConversationContainer = (props) => {
    const dataChats = [
        {
          id: 1,
          name: "Nguyet 1",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 2,
          name: "Nguyet 2",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Nice to meet you",
          date: "2021-07-05",
        },
        {
          id: 3,
          name: "Nguyet 3",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 4,
          name: "Nguyet 4",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 5,
          name: "Nguyet 5",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Are you working or studying?",
          date: "2021-07-05",
        },
        {
          id: 6,
          name: "Nguyet 6",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 7,
          name: "Nguyet 7",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 8,
          name: "Nguyet 8",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 9,
          name: "Nguyet 9",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 10,
          name: "Nguyet 10",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "From that night, I always think about...",
          date: "2021-07-05",
        },
        {
          id: 11,
          name: "Nguyet 11",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 12,
          name: "Nguyet 11",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 13,
          name: "Nguyet 11",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 14,
          name: "Nguyet 11",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
        {
          id: 15,
          name: "Nguyet 11",
          avatar:
            "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
          text: "Love you",
          date: "2021-07-05",
        },
      ];
  return <ConversationComponent dataChats= {dataChats} />;
};

export default ConversationContainer;
