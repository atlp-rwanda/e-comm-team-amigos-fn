import { CLOSE_MODAL, OPEN_MODAL } from "../types";

export const openModel = () => ({ type: OPEN_MODAL });
export const closeModel = () => ({ type: CLOSE_MODAL });