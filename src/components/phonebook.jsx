import React from "react";
import Form from "./form/form";
import Filter from "./filter";

import { nanoid } from "nanoid";
import RenderContacts from "./renderContact";

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    fileter: "",
  };

  submitData = (data) => {
    const contact = {
      id: nanoid(5),
      name: data.name,
      number: data.number,
    };
    const findedContact = this.state.contacts.find(
      (contact) => contact.name.toLocaleLowerCase() === data.name.toLowerCase()
    );
    if (findedContact) {
      alert(`${data.name} is already in contacts.`);
    } else
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  changFilter = (event) => {
    this.setState({ fileter: event.currentTarget.value });
  };

  visibleRender = () => {
    const normalizedFilter = this.state.fileter.toLocaleLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deletContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1> Phonebook </h1>
        <Form onSubmit={this.submitData} />
        <h2>Contacts</h2>
        <Filter value={this.state.fileter} onChange={this.changFilter} />
        <RenderContacts
          value={this.visibleRender()}
          onDelete={this.deletContact}
        />
        {/* <ul>
                    {this.visibleRender().map(el => (
                        <li key={el.id}>
                            <p>{el.name}</p>
                            <p>{el.number}</p>
                        </li>
                    ))}
                </ul> */}
      </div>
    );
  }
}

export default Phonebook;
