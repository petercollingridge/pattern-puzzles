import React from 'react';
import { Link } from "react-router-dom";
import { puzzleLayout } from '../AppData';

import './puzzleMenu.css';


function Menu() {
    return (
        <main className="puzzle-menu">
            { puzzleLayout.map((section, index) => {
                return <Section key={index} name={index + 1} puzzles={section} />
            })}
        </main>
    );
}

function Section({ name, puzzles }) {
    console.log(puzzles);
    return (
        <section>
            <h3>Section { name }</h3>
            <ul>
                { puzzles.map(({slug}) => (
                    <li slug={slug}>
                        <Link to={slug}>{slug}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Menu;
