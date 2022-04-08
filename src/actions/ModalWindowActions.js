import {ModalWindowConstants} from "../constants/ModalWindowConstants";

export const ModalWindowActions = {
  hide,
  show,
  loading,
}

function hide() {return {type: ModalWindowConstants.HIDE_CONTACTS}}
function show() {return {type: ModalWindowConstants.SHOW_CONTACTS}}

function loading(state) { return {type: ModalWindowConstants.LOADING, state}}

