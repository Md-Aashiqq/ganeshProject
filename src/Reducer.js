export const reducer = (state, action) => {
  switch (action.type) {
    case 'PUTDATA':
      return { ...state, data: [action.load] };
    case 'DESC':
      return { ...state, data: state.data + 1 };
    default:
      return state;
  }
};

export const initialState = {
  data: [
    { medName: 'detol', price: 20 },
    { medName: 'lifeboy', price: 50 }
  ],
  isLogin: false,
  token: null
};
