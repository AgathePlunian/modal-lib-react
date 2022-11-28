import { Modal } from "./lib";

function App() {

  let title= "Hello !";
  let content = "Thanks for subscribing !";

  return (
    <div className="App">
      <button type='button' className='btn-modal'>Save</button>
      <Modal title={title} content={content}></Modal>
    </div>
  );
}

export default App;