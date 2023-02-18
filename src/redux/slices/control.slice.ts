import { Dispatch, Slice, createSlice } from "@reduxjs/toolkit";
// ----------------------------------------------------------------------

interface snackState {
  text: null | string;
  type: null | "success" | "error" | "warning" | "info";
}

interface controlState {
  loading: boolean;
  snack: snackState;
}

const initialState = {
  loading: false,
  snack: {
    text: null,
    type: null,
  },
};

const slice: Slice = createSlice({
  name: "control",
  initialState,
  reducers: {
    showSnackbar(state, action) {
      switch (action.payload.type) {
        case "success":
          state.snack.text = action.payload?.text || "Success";
          state.snack.type = "success";
          break;
        case "error":
          state.snack.text =
            action.payload?.text || "Unexpected Error Occurred";
          state.snack.type = "error";
          break;
        case "warning":
          state.snack.text = action.payload?.text;
          state.snack.type = "warning";
          break;
        case "info":
          state.snack.text = action.payload?.text;
          state.snack.type = "info";
          break;
        default:
          state.snack.text =
            action.payload?.text || "Unexpected Error Occurred";
          state.snack.type = "error";
          break;
      }
    },
    hideSnackbar(state) {
      state.snack.text = null;
      state.snack.type = null;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hideSnackbar, startLoading, stopLoading } = slice.actions;

export const showSnackbar =
  (text: string, type = "success") =>
  (dispatch: Dispatch) =>
    dispatch(slice.actions.showSnackbar({ text, type }));
