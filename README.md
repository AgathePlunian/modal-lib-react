
# Modal component library

Modal component package

## Author

- [@AgathePlunian](https://github.com/AgathePlunian)

### Install

Install using `npm i modal-lib-react-oc `

### Usage

In a React app, use the modal component:

`import { Modal } from 'modal-lib-react-oc'`


Use class: `btn-modal` on trigger element to open modal

### Exemple

```
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

```