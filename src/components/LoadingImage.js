import { useEffect, useState } from "react"
import Placeholder from "../img/placeholder.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from "react";
import { Button } from "react-bootstrap";
import { GrZoomOut } from 'react-icons/gr'
import { GrZoomIn } from 'react-icons/gr'

export const LoadingImage = (props) => {


    const [loading, setLoading] = useState(true)
    const [currentSrc, setCurrentSrc] = useState(Placeholder)
    const [zoomButton, setZoomButton] = useState(true)

    useEffect(() => {
        const image = new Image()
        image.src = props.src
        image.onload = () => {
            setCurrentSrc(props.src)
            setLoading(false)
            console.log("loaded")
        }
    }, [])

    const onZoom = (zoomIn, reset) => {
        if (reset) {
            zoomButton ? zoomIn(5) : reset(); setZoomButton(!zoomButton)
        }
        else {
            zoomIn(5);
            setZoomButton(false)
        }
    }

    return (

        <div>
            {!props.zoom &&
                <img style={{
                    opacity: loading ? 0.5 : 1,
                    transition: "opacity 1s linear"
                }} src={currentSrc} alt="" />
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
                                    <img src={currentSrc} style={{
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