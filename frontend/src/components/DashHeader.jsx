import React from "react";
import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <>
            <header className="dash-header">
                <div className="dash-header__container">
                    <Link to="/dash/notes">
                        <h1 className="dash-header__title">Tech Notes</h1>
                    </Link>
                    <nav className="dash-header__nav"></nav>
                </div>
            </header>
        </>
    );
};

export default DashHeader;
