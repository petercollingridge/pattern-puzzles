import React from 'react';
import { getGraphObject } from '../../utils/graphUtils';

import './graph.css';


export default class Graph extends React.Component {
    constructor(props) {
        super(props);

        const graph = getGraphObject(props.nodes, props.edges, props.size);

        this.state = {
            nodes: graph.nodes,
            edges: graph.edges
        };

        this.colourNode = this.colourNode.bind(this);
    }

    colourNode(i) {
        // Add colour to array of node colours
        const newNodes = this.state.nodes.slice();
        newNodes[i].colour = this.props.selectedColour;

        this.setState({
            nodes: newNodes
        });

        this.props.puzzle.evaluate(this.state);
    }

    render() {
        const {
            nodes = [],
            edges = []
        } = this.state;

        return <g className="graph">
            <g className="graph-edges">
                { edges.map((edge, i) =>
                    <g key={i}>
                        <line
                            className="edge-outline"
                            x1={edge.x1}
                            y1={edge.y1}
                            x2={edge.x2}
                            y2={edge.y2}
                        />
                        <line
                            x1={edge.x1}
                            y1={edge.y1}
                            x2={edge.x2}
                            y2={edge.y2}
                        />
                    </g>
                )}
            </g>

            <g className="graph-nodes">
                { nodes.map((node, i) => {
                    let className = "colourable ";
                    if (node.colour) {
                        className += `fill-${node.colour}`;
                    } else {
                        className += "empty-region";
                    }

                    return <circle
                        key={i}
                        className={className}
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        onClick={() => this.colourNode(i)}
                    />
                })}
            </g>
        </g>
    }
};
