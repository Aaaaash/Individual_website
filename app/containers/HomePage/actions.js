import {
  CHANGE_MENU_STATE,
} from './constants';

export function changeMenuState(val) {
  return {
    type: CHANGE_MENU_STATE,
    val,
  };
}
