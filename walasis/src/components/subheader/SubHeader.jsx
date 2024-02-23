import React from "react";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div>
      <section className="Subheader">
        <div className="row">
          <div className="col-md-2">
            <h4>Untitled Quiz</h4>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Single Select</option>
              <option defaultValue="1">Multi Seclect</option>
              <option defaultValue="2">Fill in the blanks</option>
              <option defaultValue="3">Poll</option>
              <option defaultValue="3">True/False</option>
              <option defaultValue="3">Guess Word</option>
            </select>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-4">
            <div className="row p-2">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="addAtag"
                  placeholder="Add a tag"
                />
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ height: "35px" }}
                >
                  <i className="bi bi-lightbulb-fill"></i>Add explanation
                </button>
              </div>
            </div>

            <div className="col-md-12 d-flex justify-content-evenly p-2 ">
              <select
                className="form-select form-select-sm mx-2"
                aria-label=".form-select-sm example"
              >
                <option selected>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
              <select
                className="form-select form-select-sm mx-2"
                aria-label=".form-select-sm example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select form-select-sm mx-2"
                aria-label=".form-select-sm example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubHeader;
