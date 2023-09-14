
import PropTypes from 'prop-types'
import { useState } from 'react';

const Textform = (props) => {
    const handleOnChange = (event) => {

        setText(event.target.value)
    }

    const handleUpClick = () => {

        
       let newText = text.toUpperCase();
        setText(newText);

         props.showAlert("Converted to Uppercase", "success");
    }
     const handleLoClick = () => {
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase", "success");
     };
    const handleCapitalize = () => {
      let textArray = text.split(" "); // Split the text into words using space as the delimiter
      for (var i = 0; i < textArray.length; i++) {
        const word = textArray[i];
        textArray[i] =
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      let newText = textArray.join(" ");
      setText(newText);
      props.showAlert("Converted to Capitalize", "success");
    };


      const handleClearClick = () => {
        let newText = ""
        setText(newText);
        props.showAlert("Text Has been cleared", "danger");
      };
      const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, " "); 
        setText(newText);
        props.showAlert("Extra Spaces have been Removed", "success");
      };
       const handleCopy = () => {
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value);
         props.showAlert("Text Has been Copied to clipboard", "success");

       }

    const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h4 className="my-4 text-success">{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#4D4C65" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            name=""
            id="mybox"
            rows="7"></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-success m-2">
          Convert To UPPERCASE
        </button>
        <button
          type="button"
          onClick={handleLoClick}
          className="btn btn-secondary m-2">
          Convert To lowercase
        </button>

        <button
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-warning m-2">
          Remove Extra Spaces
        </button>
        <button
          type="button"
          onClick={handleCapitalize}
          className="btn btn-primary m-2">
          Capitalize
        </button>
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-danger m-2">
          Clear Text
        </button>
        <button type="button" onClick={handleCopy} className="btn btn-info m-2">
          Copy Text
        </button>
      </div>
      <div className="container  my-2">
        <div
          className={`card p-2 bg-${props.mode === "dark" ? "dark" : "light"}`}>
          <h4
            className={`lead text-${
              props.mode === "light" ? "grey" : "light"
            }`}>
            Your Text Summary
          </h4>
          <p
            className={`card-body text-${
              props.mode === "light" ? "grey" : "light"
            }`}>
            This text have {text.split(/\s+/).filter(Boolean).length} word and{" "}
            {text.length} characters and it can read in{" "}
            {0.008 * text.split(/\s+/).filter(Boolean).length} minutes
          </p>
        </div>
        <h3
          className={`lead py-2 text-${
            props.mode === "light" ? "grey" : "light"
          }`}>
          Text Preview
        </h3>
        <p
          className={`card-body text-${
            props.mode === "light" ? "grey" : "light"
          }`}>
          {text.length > 0 ? text : "Enter text to preview"}
        </p>
      </div>
    </>
  );
}

export default Textform


Textform.propTypes = {

    heading : PropTypes.string.isRequired,
    mode : PropTypes.string.isRequired,
    showAlert: PropTypes.func,
}