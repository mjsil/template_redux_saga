import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadDataRequest } from '../../store/modules/ip/actions';

export const IpComponent = ({ data, isLoading, error, loadDataRequest }) => {
    useEffect(() => {
        loadDataRequest();
    }, []);
    
    return (
        isLoading
            ? <p>Loading...</p>
            : error
                ? <p>Error...</p>
                : <p>{data.origin}</p>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.ip.data,
        isLoading: state.ip.isLoading,
        error: state.ip.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataRequest: () => dispatch(loadDataRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IpComponent);
