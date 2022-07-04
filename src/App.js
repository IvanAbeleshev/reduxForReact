import InputDataPost from "./components/inputDataPost";
import MessageList from "./components/messageList";

function App() {
  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-5">
          <InputDataPost />
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-5">
          <MessageList />
        </div>
        <div className="col-5">
          <h1>Second row column 2</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
