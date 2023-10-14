export const addInvoice = (payload) => {
  return {
    type: "ADD_INVOICE",
    payload: payload,
  };
};

export const removeInvoice = (payload) => {
  return {
    type: "REMOVE_INVOICE",
    payload: payload,
  };
};

export const editInvoice = (payload) => {
  return {
    type: "EDIT_INVOICE",
    payload: payload,
  };
};
