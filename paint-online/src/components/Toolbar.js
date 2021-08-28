import React from 'react'
import '../styles/toolbar.scss'

export const Toolbar = () => {
    return (
        <div className="toolbar"> 
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <input style={{marginLeft: 10}} type="color"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
        </div>
    )
}
