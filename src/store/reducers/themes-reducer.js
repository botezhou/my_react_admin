import  { TOGGLE_COLLAPSED, TOGGLE_THEMECOLOR, TOGGLE_FIXEDHEAD, TOGGLE_ISBOX }  from '../actions/themes-actions';
import { storage } from '../../utils/storage'

const initialState = {
    collapsed: storage.get('collapsed') ? storage.get('collapsed') : false,
    themeColor: storage.get('themeColor') ? storage.get('themeColor') : {bgLogo: 'bg-white',bgHead: 'bg-white',bgSlider: 'bg-black'},
    fixedHead: storage.get('fixedHead') ? storage.get('fixedHead') : true,
    isBox: storage.get('isBox') ? storage.get('isBox') : false,
}
export default function(state=initialState, action) {
  switch (action.type) {
    case TOGGLE_COLLAPSED: {
      return {
          ...state,
        collapsed: action.data
      }
    }
    case TOGGLE_THEMECOLOR: {
      return {
          ...state,
        themeColor: action.data
      }
    }
    case TOGGLE_FIXEDHEAD: {
      return {
          ...state,
          fixedHead: action.data
      }
    }
    case TOGGLE_ISBOX: {
      return {
          ...state,
          isBox: action.data
      }
    }
    default:
      return state;
  }
}
