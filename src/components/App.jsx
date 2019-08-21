import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import txtIntro from './header/intro/txtIntro';
import txtList from './body/list/txtList';
import List from './body/list/ListContainer';
import Form from './body/form/FormContainer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            openForm: false
        };
    }

    render() {
        const { openForm } = this.state;

        return (
            <div className="tapp">
                <Headline headline={txtIntro.txt_title}/>
                <Intro intro={txtIntro.txt_text}/>
                <List fetchLinkStart={txtList.txt_fetchLinkStart} fetchLinkEnd={txtList.txt_fetchLinkEnd} open={!openForm} dataGroup="1"/>
                <Form open={openForm} dataGroup="1"/>
            </div>
        );
    }
}

export default hot(module)(App);
