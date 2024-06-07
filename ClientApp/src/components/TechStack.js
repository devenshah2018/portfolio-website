import React,{ Component } from 'react';
import '../css/TechStack.css';

export class TechStack extends Component
{
    render()
    {
        return (
            <div>
                { /*TODO: Upon hovering on these icons, say how many times it appears on my profile (experiences and projects). */ }
                <div class="tech-stack">
                    <div class="buffer"></div>
                    <h5>Platforms/Frameworks</h5>
                    <div class="tech-subsection">
                        <ul class="tech-stack-list">
                            <li><img src={require('../img/salesforce.png')} /></li>
                            <li><img src={require('../img/aws.png')} /></li>
                            <li><img src={require('../img/angularjs.png')} /></li>
                            <li><img src={require('../img/react.png')} /></li>
                            <li><img src={require('../img/net.png')} /></li>
                            <li><img src={require('../img/flask.png')} /></li>
                        </ul>
                    </div>
                    <h5>Languages/Frameworks</h5>
                    <div class="tech-subsection">
                        <ul class="tech-stack-list">
                            <li><img src={require('../img/cs.png')} /></li>
                            <li><img src={require('../img/python.png')} /></li>
                            <li><img src={require('../img/js.png')} /></li>
                            <li><img src={require('../img/html.png')} /></li>
                            <li><img src={require('../img/sql.png')} /></li>
                            <li><img src={require('../img/ts.png')} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}