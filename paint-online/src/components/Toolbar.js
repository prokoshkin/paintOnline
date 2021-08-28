import React from 'react'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import '../styles/toolbar.scss'
import Brush from '../tools/Brush'
import Circle from '../tools/Circle'
import Rect from '../tools/Rect'

export const Toolbar = () => {
    return (
        <div className="toolbar"> 
            <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect" onClick={()=> 
            toolState.setTool(new Rect(canvasState.canvas))}/>
            <button className="toolbar__btn circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <input style={{marginLeft: 10}} type="color"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn brush"/>
        </div>
    )
}
