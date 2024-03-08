import { atom } from "recoil";

export const plantState = atom({
    key: "plantState", //unique identifier in respect to other atoms/selectors
    default: '', //default value (aka initial value)
})