import React,{ Component } from 'react';
import '../css/Navigation.css';

export class Navigation extends Component
{
    render()
    {
        return (
            <div>
                <nav class="page-nav">
                    <a class="page-nav-item" href="#Introduction">Introduction</a>
                    <a class="page-nav-item" href="#Experience">Experience</a>
                    <a class="page-nav-item">Projects</a>
                </nav>
            </div>
        );
    }
}