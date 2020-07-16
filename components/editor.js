import { Component } from 'react';
const isBrowser = typeof window !== 'undefined';
let RichTextEditor;
if (isBrowser) {
  RichTextEditor = require('react-rte').default;
}

export default class Home extends Component {
  state = {
    value: RichTextEditor ? RichTextEditor.createEmptyValue() : ""
  }

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render() {
    return (
      <div>
        {RichTextEditor &&
          <RichTextEditor
            value={this.state.value}
            onChange={this.onChange}
          />}
      </div>

    )
  }
}