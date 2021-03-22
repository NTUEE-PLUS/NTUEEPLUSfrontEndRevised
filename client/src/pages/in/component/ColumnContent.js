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

const Column_annotation = (props) => {
    const _annotation = props.annotation
    const _id = props.id
    return (
        <div id='Anno_space'>
            <div id={_id} className='column_annotation'>
                {_annotation.map((content, i) => (
                    <li 
                        href='#'
                        className='column_annotation'
                        id={_id + '_' + i}
                    >
                        {content + '\n'}
                    </li>
                ))}
            </div>
        </div>
    )
}

const Column_article = (props) => {
    const _sections = props.sections
    const _id = props.id
    return (
        <div id={_id}>
            {_sections.map((content, i) => (
                <Column_section
                    id={_id+"_"+(i+1)} 
                    sections = {_sections[i]} 
                    key={_id+"_"+(i+1)}
                />
            ))}
        </div>
    )
}

const Column_hashtags = (props) => {
    const _hashtags = props.hashtags
    const _id = props.id
    return (
        <div id='hashtag_space'>
            <div id={_id} class='column_hashtags'>
                {_hashtags.map((content, i) => (
                    <a 
                        href='#' className='column_hashtags' 
                        id={_id + '_' + (i+1)} 
                        key={_id + '_' + (i+1)}
                    >
                        {'#' + content}
                    </a>
                ))}
            </div>
        </div>
    )
}

const Column_section  = (props) => {
    const _bigtitle = props.sections.bigtitle
    const _sections = props.sections.sections
    const _id = props.id
    return (
        <div id={_id}>
            <p id={_id + '_bigtitle'} class='column_sections_bigtitle'>{_bigtitle}</p>
            {_sections.map((_section, i) => (
                <div className='column_minor_sections' id={_id + '_minor_section' + (i + 1)}>
                    <li id={_id + '_minor_title' + (i + 1)} className='column_minor_title'>{_section.title}</li>
                    <p id={_id + '_content' + (i + 1)} className='column_minor_content' >{_section.section}</p>
                </div>
            ))}
        </div>
    )
}

const Column_title  = (props) => {
    const _title = props.title
    const _id = props.id
    return (
        <div id={_id} class='column_whole_title'>
            { _title.map((content, i) => (
                <p
                    href='#' 
                    className='column_title'
                    id={_id + '_' + (i+1)}
                    key={_id + '_' + (i+1)}
                >
                    {content}
                </p>
            ))}
            
        </div>
    )
}
