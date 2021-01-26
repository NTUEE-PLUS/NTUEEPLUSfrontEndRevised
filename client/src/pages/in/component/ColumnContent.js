//TODO : change to hook

import React, { Component } from 'react'

class ColumnContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.Component.title,
            hashtags: this.props.Component.hashtags,
            sections: this.props.Component.sections,
            annotation: this.props.Component.annotation,
            id: this.props.Component.id,
        }
        console.log(this.props.Component.sections)
    }
    render() {
        return (
            <div id={`${this.state.id}_content`} class='column_content'>
                <div id='column_content_space'>
                    <Column_title
                        id={`${this.state.id}_title`}
                        title={this.state.title}
                    />
                    <Column_hashtags
                        id={`${this.state.id}_hashtags`}
                        hashtags={this.state.hashtags}
                    />
                    <Column_article
                        id={`${this.state.id}_article`}
                        sections={this.state.sections}
                    />
                    <Column_annotation
                        id={`${this.state.id}_annotation`}
                        annotation={this.state.annotation}
                    />
                </div>
            </div>
        )
    }
}

export default ColumnContent

// import React, { Component } from 'react';
// import './column_annotation.css';

class Column_annotation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            annotation: this.props.annotation,
            id: this.props.id,
        }
        this.addAnno = this.addAnno.bind(this)
    }
    addAnno(i, content) {
        let tag_container = document.getElementById(this.state.id)
        let newtag = document.createElement('li')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_annotation')
        newtag.setAttribute('id', this.state.id + '_' + i)
        newtag.innerHTML = content + '\n'
        tag_container.appendChild(newtag)
    }
    componentDidMount() {
        for (let i = 1; i < this.state.annotation.length + 1; i++) {
            this.addAnno(i, this.state.annotation[i - 1])
        }
    }
    render() {
        return (
            <div id='Anno_space'>
                <div id={this.state.id} class='column_annotation'></div>
            </div>
        )
    }
}
// export default Column_annotation;

// import React, { Component } from 'react';
// import Column_section from './column_section';

class Column_article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: this.props.sections,
            id: this.props.id,
        }
    }
    render() {
        const new_sections = []
        for (let i = 0; i < this.state.sections.length; i++) {
            new_sections.push(
                <Column_section
                    id={this.state.id + '_' + (i + 1)}
                    sections={this.state.sections[i]}
                />
            )
        }
        return <div id={this.state.id}>{new_sections}</div>
    }
}
// export default Column_article;

// import React, { Component } from 'react';
// import './column_hashtags.css';

class Column_hashtags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hashtags: this.props.hashtags,
            id: this.props.id,
        }
        this.addHashTag = this.addHashTag.bind(this)
    }
    addHashTag(i, content) {
        let tag_container = document.getElementById(this.state.id)
        let newtag = document.createElement('a')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_hashtags')
        newtag.setAttribute('id', this.state.id + '_' + i)
        newtag.innerHTML = '#' + content
        tag_container.appendChild(newtag)
    }
    componentDidMount() {
        for (let i = 1; i < this.state.hashtags.length + 1; i++) {
            this.addHashTag(i, this.state.hashtags[i - 1])
        }
    }
    render() {
        return (
            <div id='hashtag_space'>
                <div id={this.state.id} class='column_hashtags'></div>
            </div>
        )
    }
}
// export default Column_hashtags;

// import React, { Component } from 'react';
// import './column_href.css';

class Column_href extends Component {
    constructor(props) {
        super(props)
        this.state = {
            href: this.props.href,
            id: this.props.id,
        }
        this.addHref = this.addHref.bind(this)
    }
    addHref(i, content) {
        let tag_container = document.getElementById(this.state.id)
        let newtag = document.createElement('a')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_href')
        newtag.setAttribute('id', this.state.id + '_' + i)
        newtag.innerHTML = '#' + content
        tag_container.appendChild(newtag)
    }
    componentDidMount() {
        for (let i = 1; i < this.state.href.length + 1; i++) {
            this.addHref(i, this.state.href[i - 1])
        }
    }
    render() {
        return (
            <div id='hrefspace'>
                <div id={this.state.id} class='column_href'></div>
            </div>
        )
    }
}
// export default Column_href;

// import React, { Component } from 'react';
// import './column_section.css';

class Column_section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bigtitle: this.props.sections.bigtitle,
            sections: this.props.sections.sections,
            id: this.props.id,
        }
    }
    componentDidMount() {
        let minor_section_container = document.getElementById(this.state.id)
        for (let i = 0; i < this.state.sections.length; i++) {
            let new_minor_section = document.createElement('div')
            let minor_section_title = document.createElement('li')
            let minor_section_content = document.createElement('p')
            minor_section_title.innerHTML = this.state.sections[i].title
            minor_section_title.setAttribute(
                'id',
                this.state.id + '_minor_title' + (i + 1)
            )
            minor_section_title.setAttribute('class', 'column_minor_title')
            minor_section_content.innerHTML =
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                this.state.sections[i].section
            minor_section_content.setAttribute(
                'id',
                this.state.id + '_content' + (i + 1)
            )
            minor_section_content.setAttribute('class', 'column_minor_content')
            new_minor_section.setAttribute('class', 'column_minor_sections')
            new_minor_section.setAttribute(
                'id',
                this.state.id + '_minor_section' + (i + 1)
            )

            new_minor_section.appendChild(minor_section_title)
            new_minor_section.appendChild(minor_section_content)
            minor_section_container.appendChild(new_minor_section)
        }
    }
    render() {
        return (
            <div id={this.state.id}>
                <p
                    id={this.state.id + '_bigtitle'}
                    class='column_sections_bigtitle'
                >
                    {this.state.bigtitle}
                </p>
            </div>
        )
    }
}
// export default Column_section;

// import React, { Component } from 'react';
// import './column_title.css';

class Column_title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.id,
        }
        this.addTitle = this.addTitle.bind(this)
    }
    addTitle(i, content) {
        let title_container = document.getElementById(this.state.id)
        let newtitle = document.createElement('p')
        newtitle.setAttribute('href', '#')
        newtitle.setAttribute('class', 'column_title')
        newtitle.setAttribute('id', this.state.id + '_' + i)
        newtitle.innerHTML = content
        title_container.appendChild(newtitle)
    }
    componentDidMount() {
        for (let i = 1; i < this.state.title.length + 1; i++) {
            this.addTitle(i, this.state.title[i - 1])
        }
    }
    render() {
        return (
            <div id={this.state.id} class='column_whole_title'>
                {/* {this.state.title} */}
            </div>
        )
    }
}

// export default Column_title;

// import React, { Component } from 'react';
// import './column_sp_thx.css';

class Column_sp_thx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sp_thx: this.props.sp_thx,
            id: this.props.id,
        }
    }
    render() {
        return <div id={this.props.id}>{this.state.sp_thx}</div>
    }
}
// export default Column_sp_thx;
