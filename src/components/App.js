import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Daniel Leal",
        avatar: "https://avatars.githubusercontent.com/daniel-leal",
        time: "há 3 min",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut neque, quo aspernatur amet voluptatum" +
          "quisquam ipsum animi explicabo ipsam repellat, nobis eligendi praesentium dolor facilis qui, saepe alias" +
          "consequuntur Excepturi placeat repellendus eum labore sint, ipsa expedita quidem temporibus dolore," +
          "Delectus ipsam cumque ut laudantium eius dolorem. Iste, molestias neque modi ipsa ipsam expedita accusamus" +
          "facilis hic? Facilis, dolorem ullam. Expedita, perferendis obcaecati officia tempora cum vel qui quaerat" +
          "impedit dolor incidunt nulla tenetur, dignissimos architecto animi nihil nam. Ex distinctio harum inventor" +
          "deleniti ducimus cupiditate incidunt impedit unde quas. Ab id repellat eum itaque dignissimos dicta." +
          "Similique voluptate magni distinctio optio, ad minima minus nobis cum qui assumenda placeat quod aperiam" +
          "dolor error voluptas nisi, obcaecati mollitia reprehenderit ipsum? Aspernatur repellat fugit, voluptate" +
          "maxime autem perspiciatis id, est laudantium facilis ea. Numquam sint laudantium iure, fugit enim, unde," +
          "architecto ab debitis rerum labore, totam id aliquid odio ut doloremque!"
      },
      {
        id: 2,
        name: "Andre Leal",
        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
        time: "há 30 min",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut neque, quo aspernatur amet voluptatum" +
          "quisquam ipsum animi explicabo ipsam repellat, nobis eligendi praesentium dolor facilis qui, saepe alias" +
          "consequuntur Excepturi placeat repellendus eum labore sint, ipsa expedita quidem temporibus dolore," +
          "magnam neque voluptates qui illo illum! Totam asperiores ea explicabo reiciendis eius! Cumque labore" +
          "quam tenetur, quasi ullam. Nemo labore quod eum possimus dolore, modi laborum, accusantium adipisci, tempo" +
          "sapiente vero corrupti iure aspernatur fugiat? Totam quisquam inventore doloribus voluptatum optio ullam." +
          "Delectus ipsam cumque ut laudantium eius dolorem. Iste, molestias neque modi ipsa ipsam expedita accusamus" +
          "veritatis fuga. Ipsa odit, soluta autem libero ex, quo saepe magni corrupti error nam totam corporis in od" +
          "Aspernatur sequi iste et? Ex qui aliquam dignissimos, vel quasi iste provident tenetur beatae voluptatibus" +
          "maxime nisi accusantium nihil nostrum, non sapiente modi sed nulla voluptates sequi distinctio nesciunt"
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header title="RocketBook" />
        <div className="container">
          {posts &&
            posts.map(post => (
              <Post
                key={post.id}
                headerTitle={post.name}
                avatar={post.avatar}
                time={post.time}
              >
                {post.body}
              </Post>
            ))}
        </div>
      </div>
    );
  }
}
