import React, {Fragment} from 'react'
import { ListaCamionetas } from './components/ListaCamionetas'
import { Header } from './components/Header'
import { Carrusel } from './components/Carrusel'

export function App() {
  return (
    <Fragment>
      <div className='container-general'>
        <div>
          <Header/>
          <hr/>
          <Carrusel/>
          <div className='row'>
            <div className='col'>
                <ListaCamionetas/>
            </div>
            <div className='col'>
                <ListaCamionetas/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
