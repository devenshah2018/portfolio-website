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
                            <li><img src={require('../img/salesforce.png')} alt="Salesforce icon"/></li>
                            <li><img src={require('../img/aws.png')} alt="AWS icon" /></li>
                            <li><img src={require('../img/angularjs.png')} alt="AngularJS icon" /></li>
                            <li><img src={require('../img/react.png')} alt="React icon" /></li>
                            <li><img src={require('../img/net.png')} alt=".NET icon" /></li>
                            <li><img src={require('../img/flask.png')} alt="Flask icon" /></li>
                        </ul>
                    </div>
                    <h5>Languages/Frameworks</h5>
                    <div class="tech-subsection">
                        <ul class="tech-stack-list">
                            <li><img src={require('../img/cs.png')} alt="CS icon" /></li>
                            <li><img src={require('../img/python.png')} alt="Python icon" /></li>
                            <li><img src={require('../img/js.png')} alt="JavaScript icon" /></li>
                            <li><img src={require('../img/html.png')} alt="HTMLv icon" /></li>
                            <li><img src={require('../img/sql.png')} alt="SQL icon" /></li>
                            <li><img src={require('../img/ts.png')} alt="TypeScript icon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}