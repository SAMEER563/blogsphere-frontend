import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          provident praesentium vel blanditiis ad ipsum recusandae ab
          repellendus accusantium. Eius cum repudiandae facilis optio quibusdam
          illum adipisci alias libero explicabo, temporibus a quis doloribus.
          Minima distinctio praesentium rerum soluta facere?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde
          amet ipsam consequuntur consequatur id commodi totam deserunt repellat
          veritatis explicabo. Sapiente, provident recusandae minima laudantium
          nesciunt ea! Est soluta dolores similique odio, repellendus cupiditate
          praesentium quidem ab velit, assumenda necessitatibus perspiciatis
          culpa iste? Ipsa iste, aliquam debitis maxime voluptates amet est eius
          odit labore nulla voluptatum, molestias vero dolorum accusamus quod!
          Voluptatem, asperiores quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          animi quasi doloremque ipsa suscipit impedit neque minus aut est ut!
          Sunt culpa enim ullam a optio, veniam dicta, nemo repellendus omnis
          beatae fuga animi adipisci nostrum. Maxime eum saepe repudiandae
          consequatur sunt itaque alias veniam totam voluptates ullam. Expedita,
          ullam fugiat eius eaque quam temporibus sequi impedit laborum soluta
          accusamus inventore incidunt repudiandae ex nihil magni fuga alias
          eligendi iure consequuntur! Ratione dolorum adipisci consequuntur
          consequatur possimus modi! Exercitationem cum magni aut esse
          reprehenderit labore consectetur inventore incidunt quod
          necessitatibus alias, unde totam eligendi hic, recusandae corrupti
          facere nulla perferendis dolore facilis minus qui in! Repellendus
          earum iure itaque consequatur eaque?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
