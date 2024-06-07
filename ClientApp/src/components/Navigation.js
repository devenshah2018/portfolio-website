import React,{ Component } from 'react';
import '../css/Navigation.css';

export class Navigation extends Component
{
    render()
    {
        return (
            <div>
                <nav class="page-nav">
                    <a class="page-nav-item">Introduction</a>
                    <a class="page-nav-item">Experience</a>
                    <a class="page-nav-item">Projects</a>
                </nav>
            </div>
        );
    }
}