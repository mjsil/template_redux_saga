import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadDataRequest } from '../../store/modules/user/actions';

export const UserComponent = ({ data, isLoading, error, loadDataRequest }) => {
    useEffect(() => {
        loadDataRequest();
    }, []);
    
    return (
        isLoading
            ? <p>Loading...</p>
            : error
                ? <p>Error...</p>
                : <p>{data['user-agent']}</p>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.user.data,
        isLoading: state.user.isLoading,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataRequest: () => dispatch(loadDataRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
