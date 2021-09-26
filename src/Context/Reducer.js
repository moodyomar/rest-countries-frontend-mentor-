export default (state,{type,payload}) => {
  switch (type) {
    case 'DARK_MODE_ON':

      return {...state,theme:payload}

    case 'LIGHT_MODE_ON':
      return {...state,theme:payload}


    default:
      return state;
  }
}