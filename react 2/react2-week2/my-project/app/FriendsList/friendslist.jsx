"use client";
import React, { useReducer } from "react";

const ADD_FRIEND = "ADD_FRIEND";
const REMOVE_FRIEND = "REMOVE_FRIEND";
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const initialState = {
  friends: [
    { id: 1, name: "Alice", isFavorite: false },
    { id: 2, name: "Bob", isFavorite: true },
    { id: 3, name: "Charlie", isFavorite: false },
  ],
};

const friendsReducer = (state, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };

    case REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };

    case TOGGLE_FAVORITE:
      return {
        ...state,
        friends: state.friends.map((friend) =>
          friend.id === action.payload
            ? { ...friend, isFavorite: !friend.isFavorite }
            : friend
        ),
      };

    default:
      return state;
  }
};

function FriendsList() {
  const [state, dispatch] = useReducer(friendsReducer, initialState);
  const [newFriendName, setNewFriendName] = React.useState("");

  const addFriend = () => {
    const newFriend = {
      id: Date.now(),
      name: newFriendName,
      isFavorite: false,
    };
    dispatch({ type: ADD_FRIEND, payload: newFriend });
    setNewFriendName("");
  };

  const removeFriend = (id) => {
    dispatch({ type: REMOVE_FRIEND, payload: id });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  };

  return (
    <div>
      <h2>Friends List</h2>
      <input
        type="text"
        value={newFriendName}
        onChange={(e) => setNewFriendName(e.target.value)}
        placeholder="Enter friend's name"
      />
      <button onClick={addFriend}>Add Friend</button>

      <ul>
        {state.friends.map((friend) => (
          <li key={friend.id} style={{ margin: "8px 0" }}>
            <span style={{ fontWeight: friend.isFavorite ? "bold" : "normal" }}>
              {friend.name}
            </span>
            <button onClick={() => toggleFavorite(friend.id)}>
              {friend.isFavorite ? "Unfavorite" : "Favorite"}
            </button>
            <button onClick={() => removeFriend(friend.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
