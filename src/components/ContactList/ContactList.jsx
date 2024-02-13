import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredItems =
    filter.length === 0
      ? contacts
      : contacts.filter(el => {
          return el.name.toLowerCase().includes(filter);
        });
  return (
    <ul>
      {filteredItems.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
