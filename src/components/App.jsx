import contacts from '../contacts'
import Card from './Card'
import Avatar from './Avatar';

function createCard(contact){
  return <Card 
  key = {contact.id}
  name = {contact.name}
  img = {contact.imgURL}
  tel = {contact.phone}
  email = {contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://www.rd.com/wp-content/uploads/2020/09/GettyImages-916193692.jpg?fit=700,453" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;

