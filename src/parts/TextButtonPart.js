import React from "react";
import { Link } from "react-router-dom";

export default function TextButtonPart({ title, toLink, className }) {
  return (
    <div className="sm:col-span-4 mt-8">
      <Link to={toLink} className={className}>
        {title}
      </Link>
    </div>
  );
}
