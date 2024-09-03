import React from 'react'

export function CardYoutube() {
  return (
    <>
    <div className="socialcard">Social Card Home</div>
    <div className="totalfollowers">Total Followers: 795K</div>
    <br />
    <div className="row">
      <div className="col">
        <article className="card text-center youtube">
          <div className="card-body">
            <h5 className="card-title">
              <img src="images/icon-youtube.svg" />
              @Audi
            </h5>
            <p className="card-followers-number">10K</p>
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
              @BMW
            </h5>
            <p className="card-followers-number">30K</p>
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
              @Mercedes-Benz
            </h5>
            <p className="card-followers-number">750K</p>
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
            <p className="card-followers-number">5K</p>
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
