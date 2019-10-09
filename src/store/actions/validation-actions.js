import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_ERROR
} from "../types";

export default function validateFormAction() {
  return dispatch => {
    dispatch(validateForm());
  };
}

export const validateForm = () => ({
  type: VALIDATE_FORM
});

export const validateFormSuccess = () => ({
  type: VALIDATE_FORM_SUCCESS
});

export const validateFormError = () => ({
  type: VALIDATE_FORM_ERROR
});
