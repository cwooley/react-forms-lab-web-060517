import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      value: ''
    };
  }

  getCharactersLeft = () => {
    return this.state.maxChars - this.state.value.length
  }

  inputChanged = (event) => {
    this.setState({
      value: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxLength={this.state.maxChars} onChange={this.inputChanged} value={this.state.value}/>
        <p>Chars left: {this.getCharactersLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
