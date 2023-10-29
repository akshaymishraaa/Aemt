import React from "react";
import { combineReducers } from 'redux';
import { application } from "./application";
import { StudentMiddleWare } from "../components/students/reducer/studentsReducer";


const allReducers = combineReducers({
    application: application,
    studentsModule: StudentMiddleWare
})

export default allReducers;
