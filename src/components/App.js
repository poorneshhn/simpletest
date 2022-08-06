import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const contacts = [
  {
    id: "1",
    name: "nagesh",
    email: "nageshkumar@gmail.com",
  },
  {
    id: "2",
    name: "suhas",
    email: "suhas @gmail.com",
  },
];

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
