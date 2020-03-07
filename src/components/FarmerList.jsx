import React from "react";

const FarmerList = ({ data }) => {
  return (
    <div className="card" style={{ width: "900px", margin: "0 auto" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{data.farmer_id}</li>
        <li className="list-group-item">{data.reg_no}</li>
        <li className="list-group-item">{data.bvn}</li>
        <li className="list-group-item">{data.first_name}</li>
        <li className="list-group-item">{data.middle_name}</li>
        <li className="list-group-item">{data.dob}</li>
        <li className="list-group-item">{data.gender}</li>
        <li className="list-group-item">{data.nationality}</li>
      </ul>
    </div>
  );
};

export default FarmerList;
