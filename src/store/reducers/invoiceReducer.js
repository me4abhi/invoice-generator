const initialState = {
  invoices: [
    {
      isOpen: true,
      currency: "$",
      currentDate: "",
      invoiceNumber: "1504877441",
      dateOfIssue: "2023-10-21",
      billTo: "Abhinav Saini",
      billToEmail: "me4abhi@aol.com",
      billToAddress: "Haryana",
      billFrom: "Shri Krishna Paints",
      billFromEmail: "sk.paints@gmail.com",
      billFromAddress: "Haryana",
      notes: "Thanks for your business!",
      total: 114.4,
      subTotal: "130.00",
      taxRate: "18",
      taxAmmount: "23.40",
      discountRate: "30",
      discountAmmount: "39.00",
      items: [
        {
          id: 0,
          name: "Berger Royale",
          description: "20 Litre Bucket",
          price: "130.00",
          quantity: 1,
        },
      ],
    },
  ],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INVOICE":
      return { ...state, invoices: [...state.invoices, action.payload] };
    case "REMOVE_INVOICE":
      const invoiceNumberToRemove = action.payload;
      const updatedInvoices = state.invoices.filter(
        (invoice) => invoice.invoiceNumber !== invoiceNumberToRemove
      );
      return { ...state, invoices: updatedInvoices };
    case "EDIT_INVOICE":
      const editedInvoice = action.payload;
      const editedInvoices = state.invoices.map((invoice) => {
        if (invoice.invoiceNumber === editedInvoice.invoiceNumber) {
          return editedInvoice;
        }
        return invoice;
      });
      console.log(editedInvoices);
      return { ...state, invoices: editedInvoices };
    default:
      return state;
  }
};

export default invoiceReducer;
