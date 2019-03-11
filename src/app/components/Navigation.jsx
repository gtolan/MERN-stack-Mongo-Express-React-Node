import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => <Link to="/dashboard">Dashboard</Link>;

export const ConnectedNavigation = connect(state => state)(Navigation);
