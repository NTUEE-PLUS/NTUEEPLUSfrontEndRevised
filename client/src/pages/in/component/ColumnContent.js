//TODO : change to hook

import React, { useEffect } from 'react'

const ColumnContent = (props) => {
    const _title = props.Component.title
    const _hashtags = props.Component.hashtags
    const _sections = props.Component.sections
    const _annotation = props.Component.annotation
    const _id = props.Component.id
    return (
        <div id={`${_id}_content`} class='column_content'>
            <div id='column_content_space'>
                <Column_title
                    id={`${_id}_title`}
                    title={_title}
                />
                <Column_hashtags
                    id={`${_id}_hashtags`}
                    hashtags={_hashtags}
                />
                <Column_article
                    id={`${_id}_article`}
                    sections={_sections}
                />
                <Column_annotation
                    id={`${_id}_annotation`}
                    annotation={_annotation}
                />
            </div>
        </div>
    )
}

export default ColumnContent

// import React, { Component } from 'react';
// import './column_annotation.css';

const Column_annotation = (props) => {
    const _annotation = props.annotation
    const _id = props.id
    const addAnno = (i, content) => {
        let tag_container = document.getElementById(_id)
        let newtag = document.createElement('li')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_annotation')
        newtag.setAttribute('id', _id + '_' + i)
        newtag.innerHTML = content + '\n'
        tag_container.appendChild(newtag)
    }
    useEffect(() => {
        _annotation.forEach((ann, i) => {
            addAnno(i+1, ann)
        })
    }, [])
    return (
        <div id='Anno_space'>
            <div id={_id} class='column_annotation'></div>
        </div>
    )
}
// export default Column_annotation;

// import React, { Component } from 'react';
// import Column_section from './column_section';

const Column_article = (props) => {
    const _sections = props.sections
    const _id = props.id
    return (
        <div id={_id}>
            {_sections.map((sec, i) => {
                <Column_section
                    id={_id + '_' + (i + 1)}
                    sections={sec}
                />
            })}
        </div>
    )
}
// export default Column_article;

// import React, { Component } from 'react';
// import './column_hashtags.css';

const Column_hashtags = (props) => {
    const _hashtags = props.hashtags
    const _id = props.id
    const addHashTag = (i, content) => {
        let tag_container = document.getElementById(_id)
        let newtag = document.createElement('a')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_hashtags')
        newtag.setAttribute('id', _id + '_' + i)
        newtag.innerHTML = '#' + content
        tag_container.appendChild(newtag)
    }
    useEffect(() => {
        _hashtags.forEach((hag, i) => {
            addHashTag(i+1, hag)
        })
    }, [])
        
    return (
        <div id='hashtag_space'>
            <div id={_id} class='column_hashtags'></div>
        </div>
    )
}
// export default Column_hashtags;

// import React, { Component } from 'react';
// import './column_href.css';

const Column_href = (props) => {
    const _href = props.href
    const _id = props.id
    const addHref = (i, content) => {
        let tag_container = document.getElementById(_id)
        let newtag = document.createElement('a')
        newtag.setAttribute('href', '#')
        newtag.setAttribute('class', 'column_href')
        newtag.setAttribute('id', _id + '_' + i)
        newtag.innerHTML = '#' + content
        tag_container.appendChild(newtag)
    }
    useEffect(() => {
        _href.forEach((hr, i) => {
            addHref(i+1, hr)
        })
    }, [])
    return (
        <div id='hrefspace'>
            <div id={_id} class='column_href'></div>
        </div>
    )
}
// export default Column_href;

// import React, { Component } from 'react';
// import './column_section.css';

const Column_section  = (props) => {
    const _bigtitle = props.sections.bigtitle
    const _sections = props.sections.sections
    const _id = props.id
    useEffect(() => {
        let minor_section_container = document.getElementById(_id)
        _sections.forEach((sec, i) => {
            let new_minor_section = document.createElement('div')
            let minor_section_title = document.createElement('li')
            let minor_section_content = document.createElement('p')
            minor_section_title.innerHTML = sec.title
            minor_section_title.setAttribute(
                'id',
                _id + '_minor_title' + (i + 1)
            )
            minor_section_title.setAttribute('class', 'column_minor_title')
            minor_section_content.innerHTML =
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                sec.section
            minor_section_content.setAttribute(
                'id',
                _id + '_content' + (i + 1)
            )
            minor_section_content.setAttribute('class', 'column_minor_content')
            new_minor_section.setAttribute('class', 'column_minor_sections')
            new_minor_section.setAttribute(
                'id',
                _id + '_minor_section' + (i + 1)
            )

            new_minor_section.appendChild(minor_section_title)
            new_minor_section.appendChild(minor_section_content)
            minor_section_container.appendChild(new_minor_section)
            console.log("section "+i)
        })
    }, [])
    return (
        <div id={_id}>
            <p
                id={_id + '_bigtitle'}
                class='column_sections_bigtitle'
            >
                {_bigtitle}
            </p>
        </div>
    )
}
// export default Column_section;

// import React, { Component } from 'react';
// import './column_title.css';

const Column_title  = (props) => {
    const _title = props.title
    const _id = props.id
    const addTitle = (i, content) => {
        let title_container = document.getElementById(_id)
        let newtitle = document.createElement('p')
        newtitle.setAttribute('href', '#')
        newtitle.setAttribute('class', 'column_title')
        newtitle.setAttribute('id', _id + '_' + i)
        newtitle.innerHTML = content
        title_container.appendChild(newtitle)
    }
    useEffect(() => {
        _title.forEach((title, i) => {
            addTitle(i+1, title)
        })
    }, [])
    return (
        <div id={_id} class='column_whole_title'>
            {/* {_title} */}
        </div>
    )
}

// export default Column_title;

// import React, { Component } from 'react';
// import './column_sp_thx.css';

const Column_sp_thx = (props) => {   
    return <div id={props.id}>{props.sp_thx}</div>
}
// export default Column_sp_thx;
