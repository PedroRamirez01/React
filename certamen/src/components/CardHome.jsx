import React from "react";

export function CardHome() {
  return (
    <>
      <div className="socialcard">Social Card Home</div>
      <div className="totalfollowers">Total Followers: 163K</div>
      <br />
      <div className="row">
        <div className="col">
          <article className="card text-center facebook">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-facebook.svg" />
                @Audi
              </h5>
              <p className="card-followers-number">130K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="card text-center twitter">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-twitter.svg" />
                @BMW
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
          <article className="card text-center instagram">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-instagram.svg" />
                @Mercedes-Benz
              </h5>
              <p className="card-followers-number">7K</p>
              <p className="card-followers-title">FOLLOWERS</p>
              <p className="card-followers-today">
                <img src="images/icon-up.svg" />
                12 Today
              </p>
            </div>
          </article>
        </div>
        <div className="col">
          <article className="card text-center youtube">
            <div className="card-body">
              <h5 className="card-title">
                <img src="images/icon-youtube.svg" />
                @Volvo
              </h5>
              <p className="card-followers-number">6K</p>
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
