import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        const title = event.target.value;

        this.setState({ title });
    }

    render() {
        const disabled = !this.state.title;

        return (
            <div className="form-wrap">
              <form className="element-add-form" onSubmit={this.handleSubmit}>
                  <input
                      type="text"
                      value={this.state.title}
                      placeholder="Add new list item"
                      onChange={this.handleChange} />

                  <Button type="submit" disabled={disabled}><i className="material-icons">add</i></Button>
              </form>
            </div>  
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;
