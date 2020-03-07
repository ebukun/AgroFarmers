import React, { Component } from "react";
import FarmerList from "./FarmerList";
import Pagination from "./util/Pagination";

class Table extends Component {
  state = {
    farmers: [],
    page: 1
  };

  getPage(id) {
    console.log(id);

    this.setState({
      page: id
    });

    fetch(`https://theagromall.com/api/v2/get-sample-farmers?limit=10&page=${id}`)
      .then(res => res.json())
      .then(response => {
        const { farmers } = response.data;

        console.log(response.data);

        this.setState({
          farmers: farmers
        });
      });
  }

  componentDidMount() {
    const { farmers } = this.state;
    if (farmers.length) {
      return;
    } else {
      fetch("https://theagromall.com/api/v2/get-sample-farmers?limit=10&page=1")
        .then(res => res.json())
        .then(response => {
          const { farmers } = response.data;

          console.log(response.data);

          this.setState({
            farmers: farmers,
            data: response.data
          });
        });
    }
  }

  render() {
    const { farmers, page } = this.state;
    console.log();
    return (
      <div className="container">
        <div className="row justify-content-center">
          <table className="table table-borderless">
            <thead className="thead-light">
              <tr>
                <td>FRAMER NAME</td>
                <td>BVN</td>
                <td>GENDER</td>
                <td>DOB</td>
              </tr>
            </thead>
            <tbody>
              {farmers.map(farmer => (
                <tr
                  onClick={() => {
                    this.props.history.push(`/farmer/${farmer.farmer_id}`);
                    this.props.handleChange(farmer);
                  }}
                  style={{ cursor: "pointer" }}
                  key={farmer.farmer_id}
                >
                  <td>{farmer.first_name + " " + farmer.middle_name}</td>
                  <td>{farmer.bvn}</td>
                  <td>{farmer.gender}</td>
                  <td>{farmer.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  disable={page === 1}
                  onClick={() => {
                    this.getPage(page - 1);
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.getPage(page + 1);
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Table;
