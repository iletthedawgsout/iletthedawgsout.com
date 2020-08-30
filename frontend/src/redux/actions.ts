import { createAction } from "@reduxjs/toolkit";

const increment = createAction<number, "increment">("increment");