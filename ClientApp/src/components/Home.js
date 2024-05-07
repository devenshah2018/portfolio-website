import React,{ Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props)
    {
        super(props);
        this.state = {
            index: 0,
            identities: ['a full stack developer','a cloud engineer','a DevOps engineer', 'an Agilist', 'a systems designer']
        };
    }

    componentDidMount()
    {
        this.interval = setInterval(() =>
        {
            const newIndex = (this.state.index + 1) % this.state.identities.length;
            this.setState({ index: newIndex });
        },2000);
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    typingEffect = (text) =>
    {
        var currentText = "";
        var textArray = text.split('');
        textArray.forEach((char,index) =>
        {
            setTimeout(() =>
            {
                currentText = currentText + char;
                document.getElementById("identity").innerText = currentText;
            },index * 50);
        });
    }

    render()
    {
        const { identities,index } = this.state;
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <div class="title-container">
                    <h1 class="name-label">Deven Shah</h1>
                    <div class="identity-labels">I am </div>
                    <div id="identity" class="identity-labels typed-out">{this.typingEffect(identities[index])}</div>
                    <ul class="social-media">
                        <li><a href="https://www.linkedin.com/in/deven-a-shah/" target="_blank">
                            <i class="fab fa-linkedin" tabindex="0"></i>
                        </a></li>
                        <li><a href="https://github.com/devenshah2018" target="_blank">
                            <i class="fab fa-github" tabindex="0"></i>
                        </a></li>
                        <li><a href="https://www.kaggle.com/devenashah" target="_blank">
                            <i class="fab fa-kaggle" tabindex="0" target="_blank"></i>
                        </a></li>
                    </ul>
                </div>
                <div class="home-container">
                    <div class="blade-container">
                        <nav class="page-nav">
                            <a class="page-nav-item">Introduction</a>
                            <a class="page-nav-item">Experience</a>
                            <a class="page-nav-item">Tech Stack</a>
                            <a class="page-nav-item">Projects</a>
                            <a class="page-nav-item">Contact</a>
                        </nav>
                    </div>
                    <div class="main-content">
                        <div class="introduction-paragraph section">
                            <h1>Introduction</h1>
                            <p class="standard-font">Meet Deven Shah, a versatile software developer with a passion for crafting robust and scalable solutions. With expertise in full-stack development and Salesforce, Deven excels in building innovative applications that streamline processes and enhance user experiences. Throughout his career, he has demonstrated proficiency in a variety of languages and platforms, including Python, C#, Java, Apex, and AWS. Deven's commitment to excellence is evident in his track record of delivering impactful projects, from developing internal tools to automate workflows to designing production-ready APIs for seamless integration. With a Bachelor's degree in Software Engineering from San Jose State University and an AWS Cloud Practitioner Certification under his belt, Deven is well-equipped to tackle the challenges of today's dynamic tech landscape. Whether it's optimizing database management, implementing machine learning algorithms, or mastering API development, Deven's dedication to continuous learning and innovation makes him a valuable asset to any team. Connect with Deven today to explore collaboration opportunities and bring your vision to life.</p>
                        </div>
                        <div class="section">
                            <h1>Experience</h1>
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
                        <div class="section">
                            <h1>Tech Stack</h1>
                            <h2>Platforms/Frameworks</h2>
                            <div class="tech-subsection">
                                <ul class="tech-stack-list">
                                    <li><img src={require('./azure.png')} /></li>
                                    <li><img src={require('./salesforce.png')} /></li>
                                    <li><img src={require('./aws.png')} /></li>
                                    <li><img src={require('./angularjs.png')} /></li>
                                    <li><img src={require('./react.png')} /></li>
                                    <li><img src={require('./net.png')} /></li>
                                    <li><img src={require('./flask.png')} /></li>
                                </ul>
                            </div>
                            <h2>Languages/Frameworks</h2>
                            <div class="tech-subsection">
                                <ul class="tech-stack-list">
                                    <li><img src={require('./cs.png')} /></li>
                                    <li><img src={require('./python.png')} /></li>
                                    <li><img src={require('./js.png')} /></li>
                                    <li><img src={require('./html.png')} /></li>
                                    <li><img src={require('./sql.png')} /></li>
                                    <li><img src={require('./ts.png')} /></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

