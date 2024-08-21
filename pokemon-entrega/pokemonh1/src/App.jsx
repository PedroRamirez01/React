import React from 'react'
import {Header} from './component/Header'
import { Form } from './component/Form'
import { Card } from './component/Card'

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <Form />
          </div>
          <div className="col-2"></div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}
