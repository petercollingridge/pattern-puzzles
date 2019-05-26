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
                { nodes.map((node, i) =>
                    <circle
                        key={i}
                        className="empty-region"
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        onClick={(evt) => this.clickNode(evt, i)}
                    />
                )}
            </g>
        </g>
    }
};
