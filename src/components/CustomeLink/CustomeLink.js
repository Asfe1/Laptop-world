import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomeLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline aliceblue" : "underline rgb(189, 140, 126)", color: match ? "rgb(206, 210, 214)" : "rgb(236, 188, 16)", textUnderlineOffset: '5px', textDecorationThickness: "2px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ""}
        </div>
    );
}

export default CustomeLink;