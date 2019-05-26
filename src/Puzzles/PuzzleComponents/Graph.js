import React from 'react';

import './graph.css';


export default class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeColours: []
        };

        this.clickNode = this.clickNode.bind(this);
    }

    clickNode(evt, i) {

    }

    render() {
        const {
            nodes,
            edges,
            nodeRadius=8,
            scale=32,
            selectedColour
        } = this.props;

        console.log(selectedColour)

        return <g className="graph">
            <g className="graph-edges">
                { edges.map(([node1, node2], i) =>
                    <line
                        key={i}
                        x1={nodes[node1][0] * scale}
                        y1={nodes[node1][1] * scale}
                        x2={nodes[node2][0] * scale}
                        y2={nodes[node2][1] * scale}
                    />
                )}
            </g>

            <g className="graph-nodes">
                { nodes.map((node, i) =>
                    <circle
                        key={i}
                        className="empty-region"
                        r={nodeRadius}
                        cx={node[0] * scale}
                        cy={node[1] * scale}
                        onClick={(evt) => this.clickNode(evt, i)}
                    />
                )}
            </g>
        </g>
    }
};
