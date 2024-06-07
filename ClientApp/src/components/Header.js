import React,{ Component } from 'react';
import '../css/Header.css';

export class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            index: 0,
            identities: ['a full stack developer','a cloud engineer','a DevOps engineer','an Agilist','a systems designer']
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
                        <li><a href="https://github.com/devenshah2018" target="_blank" class="tool-tip">
                            <i class="fab fa-github" tabindex="0"></i>
                            <span class="tooltiptext"></span>
                        </a></li>
                        <li><a href="https://www.kaggle.com/devenashah" target="_blank">
                            <i class="fab fa-kaggle" tabindex="0" target="_blank"></i>
                        </a></li>
                        <li><a href="mailto:devenshah2018@gmail.com" target="_blank">
                            <i class="fa fa-envelope" tabindex="0" target="_blank"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        );
    };
}