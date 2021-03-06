import React, { Component } from 'react';
import GroupForm from '../../components/GroupForm/GroupForm';

class Group extends Component {
    
    state = {
        groups: []
    }
    
    render() {
        return (
            <>
               <h2
               style={{
                fontSize: 50,
                textAlign: 'center',
            }}
               > Create a Group! </h2>
                <GroupForm 
                history={this.props.history}
                handleCreateGroup={this.props.handleCreateGroup}
                />
            </>
        );
    }
}

export default Group;