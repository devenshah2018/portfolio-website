import React,{ Component } from 'react';
import '../css/Home.css';
import { Experience } from './Experience';
import { Header } from './Header';
import { Introduction } from './Introduction';
import { Navigation } from './Navigation';
import { TechStack } from './TechStack';

export class Home extends Component {
    render()
    {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <Header />
                <div class="home-container">
                    <div class="blade-container">
                        <Navigation />
                        <TechStack />
                    </div>
                    <div class="main-content">
                        <Introduction />
                        <div class="section">
                            <Experience />
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}