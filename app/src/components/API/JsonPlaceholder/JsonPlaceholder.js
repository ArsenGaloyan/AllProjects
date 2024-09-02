import React from "react";
import "./jsonPlaceholder.css";
import { useState, useEffect } from "react";

function JsonPlaceholder() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setselectedUser] = useState(null);
  const [userPosts, setUserPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response));
  }, []);
  console.log(users);

  function fetchUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((response) => setselectedUser(response));
  }

  function fetchUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((response) => setUserPost(response));
  }

  return (
    <div>
      <div className="nameUserBlock">
        {users.map((obj) => (
          <button
            className="nameUserItem"
            key={obj.id}
            onClick={() => fetchUserDetails(obj.id)}
          >
            {obj.name}
          </button>
        ))}
      </div>

      <div className="infoCardUserBlock">
        {selectedUser && (
          <div>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
            <button
              className="buttonShowPosts"
              onClick={() => fetchUserPosts(selectedUser.id)}
            >
              Show Posts
            </button>
          </div>
        )}
      </div>
      <div className="postUserBlock">
        {userPosts.length > 0 && (
          <div className="postsContainers">
            <h3 className="postNameTitle">
              Посты пользователя {selectedUser.name}:
            </h3>
            <div className="postsContainer">
              {userPosts.map((post) => (
                <div className="postUserBlockItem" key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JsonPlaceholder;
