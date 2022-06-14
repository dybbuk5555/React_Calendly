import React, { Component, createRef } from 'react';
import PrismaZoom from 'react-prismazoom';
import { ScrollBoost } from "react-scrollbooster";

import map from "./assets/map.png";

class App extends Component {
    constructor(props) {
        super(props)
        this.prismaZoom = createRef()
        this.state = {
            zoom: 1,

        }
    }

    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }

    onClickOnZoomOut = () => {
        this.prismaZoom.current.zoomOut(1)
    }

    onClickOnZoomIn = () => {
        this.prismaZoom.current.zoomIn(1)
    }

    onDoubleClickOnCard = (event) => {
        event.preventDefault()
        event.stopPropagation()

        const zoneRect = event.currentTarget.getBoundingClientRect()
        const layoutRect = event.currentTarget.parentNode.getBoundingClientRect()


        const zoom = this.prismaZoom.current.getZoom()

        if (zoom > 1) {
            this.prismaZoom.current.reset()
            return
        }

        const [relX, relY] = [(zoneRect.left - layoutRect.left) / zoom, (zoneRect.top - layoutRect.top) / zoom]
        const [relWidth, relHeight] = [zoneRect.width / zoom, zoneRect.height / zoom]
        this.prismaZoom.current.zoomToZone(relX, relY, relWidth, relHeight)
    }

    render() {
        return (
            <>

                <div className="p-6">
                    <ScrollBoost scrollMode="transform" emulateScroll >
                        {({ viewport, scrollbooster }) => (
                            <>
                                <div className="relative left-20 top-28 space-x-2 z-10">
                                    <div className="rounded-md shadow inline-block">
                                        <button
                                            onClick={(event) => {
                                                if (scrollbooster) {
                                                    const layoutRect = event.currentTarget.parentNode.getBoundingClientRect();
                                                    const [relX, relY] = [(scrollbooster.getState().position.x / 2) + 4 * layoutRect.width , (scrollbooster.getState().position.y / 2) + 6.2 * layoutRect.height];
                                                    this.prismaZoom.current.zoomToZone(relX, relY, layoutRect.width, layoutRect.height);
                                                }
                                            }}
                                            className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
                                        >
                                            Zoom In
                                        </button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3 inline-block">
                                        <button
                                            onClick={this.onClickOnZoomOut}
                                            className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
                                        >
                                            Zoom Out
                                        </button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3 inline-block">
                                        <button
                                            onClick={() => {
                                                scrollbooster.scrollTo();
                                            }}
                                            className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-hidden w-full h-container" ref={viewport}>
                                    <div>
                                        <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={2} ref={this.prismaZoom}>
                                            <img className=" max-w-none w-map h-auto px-10" src={map} alt="map" />
                                        </PrismaZoom>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    if (scrollbooster) {
                                        console.log(scrollbooster.getState());
                                    }
                                }}>Click me!</button>
                            </>
                        )}
                    </ScrollBoost>
                </div>
            </>
        )
    }
}

export default App