import { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    id: '',
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="nameField">Name</label>
          <input
            className={styles.inputField}
            id="nameField"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneField">Phone</label>
          <input
            className={styles.inputField}
            id="phoneField"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
