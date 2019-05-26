import React from 'react';

import './graph.css';


export default class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeColours: props.nodes.map(node => node.colour)
        };

        this.clickNode = this.clickNode.bind(this);
    }

    clickNode(i, colour) {
        const newNodeColours = this.state.nodeColours.slice();
        newNodeColours[i] = colour;

        this.setState({
            nodeColours: newNodeColours
        });
    }

    render() {
        const { nodes, edges, selectedColour } = this.props;

        return <g className="graph">
            <g className="graph-edges">
                { edges.map((edge, i) =>
                    <line
                        key={i}
                        x1={edge.x1}
                        y1={edge.y1}
                        x2={edge.x2}
                        y2={edge.y2}
                    />
                )}
            </g>

            <g className="graph-nodes">
                { nodes.map((node, i) => {
                    let className = "colourable ";
                    if (this.state.nodeColours[i]) {
                        className += `fill-${this.state.nodeColours[i]}`;
                    } else {
                        className += "empty-region";
                    }

                    return <circle
                        key={i}
                        className={className}
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        onClick={() => this.clickNode(i, selectedColour)}
                    />
                })}
            </g>
        </g>
    }
};
