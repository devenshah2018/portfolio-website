import React,{ Component } from 'react';
import '../css/Introduction.css';

export class Introduction extends Component
{
    render()
    {
        return (
            <div>
                <div class="introduction-paragraph section">
                    <h1 id="Introduction">Introduction</h1>
                    <p class="standard-font">Meet Deven Shah, a dynamic software developer with a flair for full-stack development and a knack for creating impactful, scalable solutions. With hands-on experience in Python, C#, Java, Apex, and AWS, Deven seamlessly bridges the gap between front-end aesthetics and back-end functionality. He holds a Bachelor's degree in Software Engineering from San Jose State University and is an AWS Cloud Practitioner, showcasing his commitment to leveraging cutting-edge technologies. Beyond code, Deven is an avid runner, always pushing his limits. Currently, he's working on this very portfolio website, which not only highlights his skills but also stands as a testament to his passion for continuous learning and innovation.
                        Connect with <a href="https://www.linkedin.com/in/deven-a-shah/" target="_blank">
                            Deven 
                            <svg viewBox="0 0 70 36">
                                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                            </svg>
                        </a>
                        to explore how he can bring your tech visions to life!</p>
                </div>
            </div>
        );
    }
}