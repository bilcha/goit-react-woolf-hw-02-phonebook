import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
          padding: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}
export default App;
