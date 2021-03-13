import React from "react";
import Button from "./Button";

function Card(props) {
  const {
    title,
    price,
    users,
    storage,
    public_projects,
    access,
    private_projects,
    phone_support,
    subdomain,
    status_report,
  } = props;
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {title}
        </h5>
        <h6 className="card-price text-center">
          ${price}
          <span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fa fa-check"></i>
            </span>
            {users}
          </li>
          <li>
            <span className="fa-li">
              <i className="fa fa-check"></i>
            </span>
            {storage}
          </li>
          <li>
            <span className="fa-li">
              <i className="fa fa-check"></i>
            </span>
            {public_projects}
          </li>
          <li>
            <span className="fa-li">
              <i className="fa fa-check"></i>
            </span>
            {access}
          </li>

          {title === "Free" ? (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              {private_projects}
            </li>
          ) : (
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              {private_projects}
            </li>
          )}

          {title === "Free" ? (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              {phone_support}
            </li>
          ) : (
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              {phone_support}
            </li>
          )}

          {title === "Free" ? (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              {subdomain}
            </li>
          ) : (
            [
              title === "Pro" ? (
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check"></i>
                  </span>
                  <strong>Unlimited </strong>
                  {subdomain}
                </li>
              ) : (
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check"></i>
                  </span>
                  {subdomain}
                </li>
              ),
            ]
          )}

          {title === "Pro" ? (
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              {status_report}
            </li>
          ) : (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              {status_report}
            </li>
          )}
        </ul>
        <Button></Button>
      </div>
    </div>
  );
}

export default Card;
