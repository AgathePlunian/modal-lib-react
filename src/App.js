import { Modal } from "./lib";

function App() {

  let title= "Thanks for subscribing !";
  let content = "balbalablabal";

  return (
    <div className="App">
      <button type='button' className='btn-modal'>Save</button>
      <Modal title={title} content={content}></Modal>
    </div>
  );
}

export default App;