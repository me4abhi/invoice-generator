# Invoice Generator - React-Redux App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice Generator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device.

- Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.
- Uses React-Redux for state management.

### Live Demo

https://invoice-generator-react-redux-m4a.netlify.app/

### Screenshots

### Installation

```
git clone https://github.com/me4abhi/invoice-generator-react-redux.git

npm install

nvm run 16.13.0

npm start / npm run build
```

### To-Do

- [ ] Integrate Redux into the application.

- [ ] Create Redux&nbsp;`actions`,&nbsp;`action types`, and&nbsp;`reducers` to manage the invoice state.

  - [ ] Add
  - [ ] Edit
  - [ ] View
  - [ ] Delete

- [ ] Implement a component to display a list of invoices.

- [ ] Make the list of invoices as first screen and move the create to a new&nbsp;`Create Invoice`&nbsp;button.

- [ ] Proper error handling

### Other Changes

- [x] Fix functionality for calculating&nbsp;`Subtotal`&nbsp;and&nbsp;`Total`.

- [x] Updated/improved setState logic when adding additional items.

- [x] Generate Invoice Number automatically.

### Meta

Abhinav Saini – [Connect on LinkedIn](https://linkedin.com/in/me4abhi)
# invoice-generator-react-redux
