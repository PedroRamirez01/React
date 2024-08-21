import React, {Fragment} from 'react'
import { ListaAutos } from './components/ListaAutos'
import { ListaCamiones } from './components/ListaCamiones'
import { ListaMotos } from './components/ListaMotos'

export function App() {
  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <ListaAutos/>
        </div>
        <div className='col'>
          <ListaCamiones/>
        </div>
        <div className='col'>
          <ListaMotos/>
        </div>
      </div>
    </Fragment>
  )
}
