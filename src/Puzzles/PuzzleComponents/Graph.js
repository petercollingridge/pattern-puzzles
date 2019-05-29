import React from 'react';
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

        const size = this.props.size;
        const r = this.props.nodeRadius;

        return <g className="graph">
            <g className="graph-edges">
                { edges.map((edge, i) =>
                    <g key={i}>
                        <line
                            className="edge-outline"
                            x1={edge.x1 * size}
                            y1={edge.y1 * size}
                            x2={edge.x2 * size}
                            y2={edge.y2 * size}
                        />
                        <line
                            x1={edge.x1 * size}
                            y1={edge.y1 * size}
                            x2={edge.x2 * size}
                            y2={edge.y2 * size}
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
                        cx={node.x * size}
                        cy={node.y * size}
                        r={r}
                        onClick={() => this.colourNode(i)}
                    />
                })}
            </g>
        </g>
    }
};
