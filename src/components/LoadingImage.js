import { useEffect, useState } from "react"
import Placeholder from "../img/placeholder.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from "react";
import { Button } from "react-bootstrap";
import { GrZoomOut } from 'react-icons/gr'
import { GrZoomIn } from 'react-icons/gr'

export const LoadingImage = (props) => {


    const [loading, setLoading] = useState(true)
    const [zoomButton, setZoomButton] = useState(true)

    const onZoom = (zoomIn, reset) => {
        if (reset) {
            zoomButton ? zoomIn(5) : reset(); setZoomButton(!zoomButton)
        }
        else {
            zoomIn(5);
            setZoomButton(false)
        }
    }

    const onLoad = () => {
        setLoading(false)
        props.onLoad && props.onLoad()
    }

    return (

        <div>
            {                
            !props.zoom &&
                <img style={{
                    opacity: loading ? 0.5 : 1,
                    transition: "opacity 1s linear"
                }} src={props.src} onLoad={onLoad} alt="" />
            }

            {(props.zoom) &&
                <TransformWrapper
                    doubleClick={{
                        disabled: true
                    }}
                    limitToBounds={true}
                    wheel={{
                        disabled: true
                    }}
                    pinch={{
                        disabled: true
                    }}
                    panning={{
                        disabled: zoomButton ? true : false
                    }}
                    maxScale={5}
                    minScale={1}
                    initialScale={1}>

                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                            <div onClick={() => onZoom(zoomIn)} style={{ cursor: "pointer" }}>
                                <TransformComponent>
                                    <img src={props.src}
                                        onLoad={onLoad}
                                        style={{
                                            opacity: loading ? 0.5 : 1,
                                            transition: "opacity 1s linear"
                                        }} />
                                </TransformComponent>
                            </div>
                            <Button onClick={() => onZoom(zoomIn, resetTransform)} style={{
                                position: 'relative', background: '#f4ebf5', color: "white", borderColor: 'white', left: "40%", top: -50, opacity: 0.8
                            }}>{zoomButton ? <GrZoomIn /> : <GrZoomOut />}</Button>
                        </React.Fragment>
                    )}
                </TransformWrapper>
            }
        </div>
    )
}