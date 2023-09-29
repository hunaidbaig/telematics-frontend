import React, { useState } from "react";
import "./searchTable.css";
const SearchTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("carNo");

  const filteredData = data.filter((item) => {
    const searchBy =
      selectedFilter === "carid"
        ? item.carid.toString()
        : selectedFilter === "date"
        ? item.date
        : selectedFilter === "serialNo"
        ? item.serialNo
        : item.carNo;

    return searchBy.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div class="card-header pb-0">
            <div className="search-bar">
              <input
                type="text"
                placeholder="search here"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="form-control"
              />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="form-select"
              >
                <option value="carNo">Car No</option>
                <option value="date">Date</option>
                <option value="serialNo">Serial No</option>
                <option value="carid">Car ID</option>
              </select>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Car ID
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Date
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Car No
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Serial No
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Image
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.carid}>
                      <td class="text-xs font-weight-bold mb-0 text-secondary">
                        {item.carid}
                      </td>
                      <td class="text-xs font-weight-bold mb-0 text-secondary">{item.date}</td>
                      <td class="text-xs font-weight-bold mb-0 text-secondary">
                        {item.carNo}
                      </td>
                      <td class="text-xs font-weight-bold mb-0 text-secondary">
                        {item.serialNo}
                      </td>
                      <td class="text-xs font-weight-bold mb-0 ">
                        <img src={item.image} alt="" width="50" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
