import React from "react";

export function Card() {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200" className="card-img-top"/>
      <div className="card-body text-center">
        <button className="btn btn-primary">Ir</button>
      </div>
    </div>
  );
}