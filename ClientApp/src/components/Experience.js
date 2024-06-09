import React,{ Component } from 'react';
import '../css/Experience.css';

export class Experience extends Component
{
    render()
    {
        return (
            <div>
                <h1 id="Experience">Experience</h1>
                <div class="timeline">
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>Patelco</h3>
                        <p class="standard-font">2023 - 2024</p>
                        <p class="standard-font">Responsible for developing full-stack functionalities using SCRUM Agile and SFDC to streamline the acquisition of new Patelco members.</p>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>NetApp</h3>
                        <p class="standard-font">2021 - 2022</p>
                        <p class="standard-font">Developed solutions to automate monitoring, backing up, and restoring data on storage arrays.</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>Juntrax</h3>
                        <p class="standard-font">2018 - 2019</p>
                        <p class="standard-font">Responsible for preparing testing oracles to validate the performance of new front-end integrations.</p>
                    </div>
                </div>
            </div>
        );
    }
}