import React from "react";

export function CardFacebook() {
  return (
    <>
      <div className="socialcard">Social Card Home</div>
      <div className="totalfollowers">Total Followers: 280K</div>
      <br />
      <div className="row">
        <div className="col">
          <article className="card text-center facebook">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-facebook.svg" />
                @Audi
              </h5>
              <p className="card-followers-number">120K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="card text-center facebook">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-facebook.svg" />
                @BMW
              </h5>
              <p className="card-followers-number">80K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="card text-center facebook">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-facebook.svg" />
                @Mercedes-Benz
              </h5>
              <p className="card-followers-number">20K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="card text-center facebook">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-facebook.svg" />
                @Volvo
              </h5>
              <p className="card-followers-number">60K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
