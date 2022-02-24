import "./App.css";

const user = {
  name: "Somto's pussy",
  location: "OTTAWA CITY IS MY TOWN",
  foodType: "UBER YEETS",
  age: 23,
  likes: "Coding & JEerking off into the wee hours of the morning",
  twitterUsername: "e4anyi",
  avatar:
    "https://res.cloudinary.com/betterdev/image/upload/v1624211301/chris_ge6pzx.jpg",
};

function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="user-deets">
      <a href={url}>
        <img src={user.avatar} alt={user.name} />
      </a>
      <a href={url}>
        <h3>{user.name}</h3>
      </a>

      <p>
        <strong>Eats</strong>
        {user.foodType}
      </p>
      <p>
        <strong>Age</strong>
        {user.age}
      </p>
      <p>
        <strong>Likes</strong>
        {user.likes}
      </p>
      <p>
        <strong>Twitter Handle</strong>
        <a href={url}>@{user.twitterUsername}</a>
      </p>
      <p>
        <strong>location</strong>
        {user.location}
      </p>
    </div>
  );
}

export default App;
