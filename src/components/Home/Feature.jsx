import React from 'react'
import style from '../../StyleSheets/Home/Feature.module.scss'

export default function Feature({name, icon}) {

  return (

    <div className={style.feature_container}>

      <h4>{name}</h4>
      {icon}
      
    </div>
  )
}
