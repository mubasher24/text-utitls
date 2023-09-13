
import PropTypes from 'prop-types'
import { useState } from 'react';

const Textform = (props) => {
    const handleOnChange = (event) => {

        setText(event.target.value)
    }

    const handleUpClick = () => {

        
       let newText = text.toUpperCase();
        setText(newText)
    }
     const handleLoClick = () => {
       let newText = text.toLocaleLowerCase();
       setText(newText);
     };
      const handleClearClick = () => {
        let newText = ""
        setText(newText);
      };
       const handleExtraSpaces = () => {
         let newText = text.split(/[ ] +/);
         setText(newText.join(" "));
       };
    const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h4 className="my-4 text-success">{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            name=""
            id=""
            rows="7"></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-success mx-2">
          Convert To UPPERCASE
        </button>
        <button
          type="button"
          onClick={handleLoClick}
          className="btn btn-primary mx-2">
          Convert To lowercase
        </button>
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-2">
          Clear Text
        </button>
        <button
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-primary mx-2">
         Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <div className="card">
          <h4 className="lead">Your Text Summary</h4>
          <p className="card-body">
            This text have {text.split(/\s+/).filter(Boolean).length} word and{" "}
            {text.length} characters and it can read in{" "}
            {0.008 * text.split(/\s+/).filter(Boolean).length} minutes
          </p>
        </div>
        <h3 className="lead">Text Preview</h3>
        <p className="card-body">{text}</p>
      </div>
    </>
  );
}

export default Textform


Textform.propTypes = {

    heading : PropTypes.string.isRequired
}