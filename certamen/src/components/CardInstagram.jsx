import React from 'react'

export function CardInstagram() {
  return (
    <>
    <div className="socialcard">Social Card Home</div>
    <div className="totalfollowers">Total Followers: 590K</div>
    <br />
    <div className="row">
      <div className="col">
        <article className="card text-center instagram">
          <div className="card-body">
            <h5 className="card-title">
              <img src="images/icon-instagram.svg" />
              @Audi
            </h5>
            <p className="card-followers-number">100K</p>
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
              @BMW
            </h5>
            <p className="card-followers-number">140K</p>
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
            <p className="card-followers-number">300K</p>
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
              @Volvo
            </h5>
            <p className="card-followers-number">50K</p>
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
  )
}
