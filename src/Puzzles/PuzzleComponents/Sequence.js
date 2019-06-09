import React from 'react';
import { getColourClassName } from './utils';


export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sequence: props.sequence,
        };

        this.colourNode = this.colourNode.bind(this);
    }

    colourNode(i) {
        // Add colour to array of node colours
        const puzzlePage = this.props.page;
        const newSequence = this.state.sequence.slice();
        newSequence[i].colour = puzzlePage.state.selectedColour;

        // Update colour and then update parent page
        this.setState(
            { sequence: newSequence },
            () => puzzlePage.update(this.state)
        );
    }

    render() {
        const sequence = this.state.sequence;
        const size = Math.min(24, 160 / sequence.length);
        const startX = -(sequence.length * size) / 2;

        return <g className="sequence">
            { sequence.map((item, i) => {
                // TODO: Update this
                const colourNode = () => this.colourNode(i);
                const {className, onClick } = getColourClassName(item, colourNode);

                return <rect
                    key={i}
                    className={className}
                    x={startX + i * size }
                    y={-size / 2}
                    width={size - 1}
                    height={size - 1}
                    rx="3"
                    ry="3"
                    onClick={onClick}
                />
            })}
        </g>
    }
};
