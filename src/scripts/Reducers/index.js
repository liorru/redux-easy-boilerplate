let initialState = [];

export function items(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
  case 'ADD':
    newState.push("test");
    return newState;
    case 'DELETE':
      newState.pop();
      return newState;
  default:
    return state;
  }
}