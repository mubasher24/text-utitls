import PropTypes from "prop-types";

const Alert = (props) => {
    const captilize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type}  fade show`}
          role="alert">
          <strong>{captilize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object,
};
