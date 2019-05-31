import React from 'react';


export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            regions: props.regions,
            connections: props.connections
        };

        this.colourNode = this.colourNode.bind(this);
    }

    colourNode(i) {
        // Add colour to array of node colours
        const puzzlePage = this.props.page;
        const newRegions = this.state.regions.slice();
        newRegions[i].colour = puzzlePage.state.selectedColour;

        this.setState({
            regions: newRegions
        });

        puzzlePage.update(this.state);
    }

    render() {
        const regions = this.state.regions;

        return <g className="graph">
            <g className="graph-nodes">
                { regions.map((region, i) => {
                    let className = "colourable ";
                    if (region.colour) {
                        className += `fill-${region.colour}`;
                    } else {
                        className += "empty-region";
                    }

                    return <rect
                        key={i}
                        className={className}
                        x={region.x}
                        y={region.y}
                        width={region.width}
                        height={region.height}
                        rx="3"
                        ry="3"
                        onClick={() => this.colourNode(i)}
                    />
                })}
            </g>
        </g>
    }
};
