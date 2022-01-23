import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handlChang = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.currentTarget.value,
    });
  };

  handlSubmitData = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(data);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handlSubmitData}>
        <label> Name: </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handlChang}
        />
        <label> Telephone: </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handlChang}
        />
        <button type="submit"> Add contact </button>
      </form>
    );
  }
}

export default Form;
