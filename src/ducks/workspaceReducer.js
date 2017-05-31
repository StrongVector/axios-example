const initialState = {
  loading: false,
  customer: {},
  initialLoad: true,
  creating: false
};

// Action Types

// Reducer
export default function workspaceReducer( state = initialState, action ) {
  if ( action.type !== "@@redux/INIT" && !action.type.includes("@@redux/PROBE_UNKNOWN_ACTION") ) console.log('Action:', action);
  let newState;
  switch( action.type ) {
    // Create Customer - Fulfilled

    // Get Customer - Pending

    // Get Customer - Fulfilled

    // Update Status - Fulfilled

    // Update Log - Fulfilled

    // Update Customer - Fulfilled

    // Delete Customer - Fulfilled

    // Show Create Customer

    default: return state;
  }
}

// Action Creators