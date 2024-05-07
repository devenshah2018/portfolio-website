import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    componentDidMount()
    {
        document.addEventListener('pointermove',this.updateCursor);
    }

    componentWillUnmount()
    {
        document.removeEventListener('pointermove',this.updateCursor);
    }

    updateCursor = ({ x,y }) =>
    {
        document.documentElement.style.setProperty('--x',x)
        document.documentElement.style.setProperty('--y',y)
    }

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
