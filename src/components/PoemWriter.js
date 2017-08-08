import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorDisplay: 'none',
      errorId: 'poem-validation-error'
    };
  }

  checkForErrors = () => {

    let lineArr = this.state.value.replace(/\r\n/g, '\n').split('\n')

    if (lineArr.length === 3){
      let line1WordCount = lineArr[0].replace(/\s+/g,' ').trim().split(' ').length
      let line2WordCount = lineArr[1].replace(/\s+/g,' ').trim().split(' ').length
      let line3WordCount = lineArr[2].replace(/\s+/g,' ').trim().split(' ').length

      //this conditional is rough.
      if (line1WordCount === 5 && line2WordCount === 3 && line3WordCount === 5) {
        debugger
        this.setState({
          errorDisplay: 'none',
          errorId: "no-error-here-mocha"
        })
      }
      } else {
        this.setState({
          errorDisplay: '',
          errorId: "poem-validation-error"
        })
    }
  }
  textareaChanged = (event) => {

    this.setState({
      value: event.target.value
    },
    this.checkForErrors.bind(this)
  )
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.value}
          onChange = {this.textareaChanged}
        />
        <div
          id={this.state.errorId}
          style={{color: 'red',
                  display: this.state.errorDisplay}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
