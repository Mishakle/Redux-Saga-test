import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const { title } = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Post can not be an empty string');
        }

        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost);
        this.setState({ title: ''});
        // this.props.hideAlert();
    }

    changeInputHandler = event => {
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">Post's title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={this.state.title}
                        name='title' 
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Create</button>
            </form>
        )
    }
};

const mapDispatchToProps = {
    createPost, showAlert, hideAlert
};

const mapStateToProps = state => ({
    alert: state.app.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);