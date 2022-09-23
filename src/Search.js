import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <div className="row g-1 justify-content-center search-engine">
        <div className="col-sm-6 search-engine-element">
          <input
            type="search"
            className="form-control form-control-sm"
            id="cityInput"
            placeholder="Enter a city"
            autoComplete="off"
          />
        </div>
        <div className="col-auto search-engine-element">
          <span>
            <button
              type="submit"
              value="search"
              className="btn btn-primary btn-sm"
            >
              Search
            </button>
            &nbsp;
            <button
              type="button"
              value="current"
              className="btn btn-secondary btn-sm"
            >
              Current
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
