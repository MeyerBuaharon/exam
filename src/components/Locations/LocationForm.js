import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextInput from "../../components/Form/TextInput";
import SelectInput from "../../components/Form/SelectInput";
import {
  required,
  number
} from "../../components/Form/FieldLevelValidationForm";
class LocationForm extends React.Component {
  componentDidMount() {
    if (this.props.obj) {
      this.handleInitialize();
    }
  }
  handleInitialize() {
    const { obj, initialize } = this.props;
    const initData = {
      _id: obj._id,
      Name: obj.Name,
      Address: obj.Address,
      Lat: obj.Coordinates.Lat,
      Lon: obj.Coordinates.Lon,
      Category: obj.Category
    };
    initialize(initData);
  }
  render() {
    const { handleSubmit, pristine, invalid, category } = this.props;
    return (
      <form onSubmit={handleSubmit} className="FormContainer">
        <div className="FormRow">
          <Field
            component={TextInput}
            name="_id"
            type="hidden"
            style={{ height: 0 }}
          />
        </div>
        <div className="FormRow">
          <label>Name: </label>
          <Field
            name="Name"
            validate={required}
            component={TextInput}
            type="text"
          />
        </div>
        <div className="FormRow">
          <label>Address: </label>
          <Field
            name="Address"
            validate={required}
            component={TextInput}
            type="text"
          />
        </div>
        <div className="FormRow">
          <label>Latitude: </label>
          <Field
            name="Lat"
            validate={[required, number]}
            component={TextInput}
            type="text"
          />
        </div>
        <div className="FormRow">
          <label>Longtitude: </label>
          <Field
            name="Lon"
            validate={[required, number]}
            component={TextInput}
            type="text"
          />
        </div>
        <div className="FormRow">
          <label>Category: </label>
          <Field
            name="Category"
            validate={[required]}
            component={SelectInput}
            options={category}
            val={"_id"}
            property={"Category"}
            type="text"
          />
        </div>
        <div className="FormRow" style={{ justifyContent: "center" }}>
          <Button type="submit" disabled={pristine || invalid}>
            Save
          </Button>
        </div>
      </form>
    );
  }
}

const locationForm = reduxForm({
  // a unique name for the form
  form: "location"
})(LocationForm);

const mapStateToProps = state => {
  return {
    category: state.categoryReducer.Categories
  };
};

export default connect(
  mapStateToProps,
  null
)(locationForm);
