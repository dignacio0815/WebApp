import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

// import "stylesheets/main.scss";

const links = {
  ballot: function (active) {
    var icon = "bs-glyphicon bs-glyphicon-list-alt bs-glyphicon-line-adjustment font-footer_icon";

    var jsx =
      <Link to="/ballot" className={ "header-navicon" + (active ? " active-icon" : "")}>
        <div className="bs-col-xs-3 bs-center-block bs-text-center small">
          <span className={icon} title="Ballot" />
          <br/>
          <span className="bs-text-center extra-small">
            Ballot
          </span>
        </div>
      </Link>;

    return jsx;
  },

  /* className="badgeTotal badge">0</span> TODO badge should only show if positive number */
  requests: function (active) {
    var icon = "bs-glyphicon bs-glyphicon-inbox bs-glyphicon-line-adjustment font-footer_icon";

    var jsx =
      <Link to="/requests" className={ "header-navicon" + (active ? " active-icon" : "")}>
        <div className="bs-col-xs-3 bs-center-block bs-text-center small">
          <span className={icon} title="Requests" />
          <br/>
          <span className="bs-text-center extra-small">
            Requests
          </span>
        </div>
      </Link>;

    return jsx;
  },

  connect: function (active) {
    var icon = "bs-glyphicon icon-icon-connect-1-3 bs-glyphicon-line-adjustment font-footer_icon";

    var jsx =
      <Link to="/connect" className={ "header-navicon" + (active ? " active-icon" : "")}>
        <div className="bs-col-xs-3 bs-center-block bs-text-center small">
          <span className={icon} title="Connect" />
          <br/>
          <span className="bs-text-center extra-small">
            Connect
          </span>
        </div>
      </Link>;

    return jsx;
  },

  activity: function (active) {
    var icon = "bs-glyphicon icon-icon-activity-1-4 bs-glyphicon-line-adjustment font-footer_icon";

    var jsx =
      <Link to="/activity" className={ "header-navicon" + (active ? " active-icon" : "")}>
        <div className="bs-col-xs-3 bs-center-block bs-text-center small">
          <span className={icon} title="Activity" />
          <br/>
          <span className="bs-text-center extra-small">
            Activity
          </span>
        </div>
      </Link>;

    return jsx;
  }
};

export default class NavigatorInHeader extends Component {
  static propTypes = {
    pathname: PropTypes.string
  };

  render () {
    var { props: { pathname } } = this;
    var { ballot, requests, connect, activity } = links;
    console.log("NavigatorInHeader pathname:", pathname);
    const navigator =
      <div className="navigator bs-row">
        <div className="bs-container-fluid">
          <div className="device-headericons--large">
            <div className="bs-container-fluid fluff-loose--top separate-top">
              <div className="bs-row">
                {ballot(pathname === "/ballot")}
                {requests(pathname === "/requests")}
                {connect(pathname === "/connect")}
                {activity(pathname === "/activity")}
              </div>
            </div>
          </div>
        </div>
      </div>;

      return navigator;

  }
}