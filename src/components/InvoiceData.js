import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

import { connect } from "react-redux";
import { removeInvoice } from "../store/actions/invoiceActions";
import InvoiceModal from "./InvoiceModal";
import EditInvoice from "./EditInvoice";

class InvoiceData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readInvoice: false,
      editInvoice: false,
      invoiceInfo: {},
    };
  }

  goCreateInvoice = () => {
    this.props.history.push("/new-invoice");
  };

  viewInvoice = (invoiceInfo) => {
    this.setState({
      ...this.state,
      readInvoice: true,
      invoiceInfo: invoiceInfo,
    });
  };
  closeModal = (event) =>
    this.setState({
      ...this.state,
      readInvoice: false,
      invoiceInfo: {},
    });

  editInvoice = (invoiceInfo) => {
    this.setState({
      ...this.state,
      editInvoice: true,
      invoiceInfo: invoiceInfo,
    });
  };

  removeInvoice = (invoiceNumber) => {
    this.props.removeInvoice(invoiceNumber);
  };

  closeEditInvoice = () => {
    this.setState({
      ...this.state,
      editInvoice: false,
    });
  };

  render() {
    return (
      <>
        <div className="table-responsive">
          <Table className="invoice-data" striped bordered hover>
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Date of Issue</th>
                <th>Bill to</th>
                <th>Bill from</th>
                <th>Sub-Total</th>
                <th>Tax Rate</th>
                <th>Total</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.props.invoiceState.invoices.map((item, i) => (
                <tr key={i}>
                  <td>{item.invoiceNumber}</td>
                  <td>{item.dateOfIssue}</td>
                  <td>{item.billTo}</td>
                  <td>{item.billFrom}</td>
                  <td>
                    {item.currency}
                    {item.subTotal}
                  </td>
                  <td>{item.taxRate.length ? item.taxRate : 0}%</td>
                  <td>
                    {item.currency}
                    {item.total}
                  </td>
                  <td>
                    <BsEyeFill onClick={() => this.viewInvoice(item)} />
                    <BiEdit onClick={() => this.editInvoice(item)} />
                    <BiTrash
                      onClick={() => this.removeInvoice(item.invoiceNumber)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="">
          <button className=" btn btn-primary" onClick={this.goCreateInvoice}>
            Create Invoice
          </button>
        </div>

        {this.state.readInvoice && (
          <InvoiceModal
            showModal={this.state.readInvoice}
            closeModal={this.closeModal}
            info={this.state.invoiceInfo}
            items={this.state.invoiceInfo.items}
            currency={this.state.invoiceInfo.currency}
            subTotal={this.state.invoiceInfo.subTotal}
            taxAmmount={this.state.invoiceInfo.taxAmmount}
            discountAmmount={this.state.invoiceInfo.discountAmmount}
            total={this.state.invoiceInfo.total}
            addInvoice={this.props.addInvoice}
            buttonsDisabled={true}
          />
        )}

        {this.state.editInvoice && (
          <>
            <EditInvoice
              isOpen={this.closeEditInvoice}
              invoiceInfo={this.state.invoiceInfo}
            />
          </>
        )}
      </>
    );
  }
}

// state managed by redux is mapped to props
const mapStateToProps = (state) => {
  return {
    invoiceState: state.invoices,
  };
};

export default connect(mapStateToProps, { removeInvoice })(InvoiceData);
