import React from 'react';
import { getItemColourType } from './utils';

import './graph.css';


export default class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: props.nodes,
            edges: props.edges
        };

        this.colourNode = this.colourNode.bind(this);
    }

    colourNode(i) {
        // Add colour to array of node colours
        const puzzlePage = this.props.page;
        const newNodes = this.state.nodes.slice();
        newNodes[i].colour = puzzlePage.state.selectedColour;

        this.setState({
            nodes: newNodes
        });

        puzzlePage.update(this.state);
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
                    const colourNode = () => this.colourNode(i);
                    const {className, onClick } = getItemColourType(node, colourNode);

                    return <circle
                        key={i}
                        className={className}
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        onClick={onClick}
                    />
                })}
            </g>
        </g>
    }
};