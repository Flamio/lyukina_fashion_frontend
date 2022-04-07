import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export const ModalWindowActions = {
  hide,
  show
}

function hide() {return {type: ModalWindowConstants.HIDE_CONTACTS}}
function show() {return {type: ModalWindowConstants.SHOW_CONTACTS}}

