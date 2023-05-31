import React from "react";
import {combineReducers} from 'redux';
import { application } from "./application";

const allReducers = combineReducers({
application:application
})

export default allReducers;