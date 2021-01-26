import React, { Component } from 'react'
import '../css/Recommendation.css'
// import { NavBar_in } from '../../component/AppBar_in'
import RecommendationBlock from '../component/RecommendationBlock'
import eesa_icon from '../images/eesa-icon.png'
import { Link } from 'react-router-dom'
import Scrollbar from 'react-custom-scrollbars'

const template1 = {
    title: {
        title: '矽谷推薦',
        name: '電機大神',
        desire_work_type: '新創CEO @ Silicon Valley',
    },
    info: {
        contact: '+886-987-654-321',
        email: 'ntuee_genius@gmail.com',
        diploma: 'NTUEE Bachelor',
    },

    spec: {
        experience:
            'IEEE seminar\n2020 ICCAD 1st place\nGoogle intern\n8x 書卷獎\n MIT 交換學生\n電機系系學會長',
        speciality: 'Computer Science\nMachine Learning\nEDA,VLSI\nICS',
    },
    image: eesa_icon,
    id: 'Recruitment_block_1',
}
const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}
const Recommendation = (props) => {
    return (
        <div className='Recommendation container-fluid'>
            <Scrollbar renderThumbVertical={renderThumb}>
                <div className='d-xl-flex justify-content-xl-around'>
                    <div className='Recommendation_container col'>
                        <div className='Recommendation_wrapper'>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                        </div>
                    </div>
                    <div className='Recommendation_container col'>
                        <div className='Recommendation_wrapper'>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                            <Link className='Recommendation_block'>
                                <Recommendation_block data={template1} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Scrollbar>
        </div>
    )
}

export default Recommendation

// import '../../css/career/Recommendation_block.css'

const Recommendation_block = (props) => {
    let recommend_image = props.data.image
    let recommend_title = props.data.title
    let recommend_info = props.data.info
    let recommend_spec = props.data.spec
    let id = props.data.id

    let visual_image = null
    // if (recommend_image){
    //     visual_image = <Recommendation_image image={recommend_image} id={id+'_image'}/>
    // }
    return (
        <div
            id='Recommendation_block_container'
            className='card col-xl-10 mx-auto my-5'
            style={{ boxShadow: '2px 2px rgba(12, 28, 99, 0.1)' }}
        >
            <div className='d-flex justify-content-center'>
                <img
                    className='card-img-top img-fluid Recommendation_block_image'
                    src={recommend_image}
                    id={id + '_image'}
                    style={{ borderRadius: '10px' }}
                ></img>
            </div>
            <div class='card-header Recommendation_block_subtitle'>
                {recommend_title.name} asking for
                <div className='w-100 Recommendation_newline'></div>
                {recommend_title.desire_work_type}
            </div>
            <div className='card-body' id='Recommendation_block_text_lg'>
                {/* <Recommendation_title title={recommend_title} id={id+'_title'}/> */}
                <p className='card-title Recommendation_block_title'>
                    {recommend_title.title}
                </p>
                <p className='card_text'>
                    <Recommendation_info
                        info={recommend_info}
                        id={id + '_info'}
                    />
                    <Recommendation_spec
                        spec={recommend_spec}
                        id={id + '_spec'}
                    />
                </p>
            </div>
            <div className='card-body' id='Recommendation_block_text_sm'>
                <Scrollbar renderThumbVertical={renderThumb}>
                    <p className='card-title Recommendation_block_title'>
                        {recommend_title.title}
                    </p>
                    <p className='card_text'>
                        <Recommendation_info
                            info={recommend_info}
                            id={id + '_info'}
                        />
                        <Recommendation_spec
                            spec={recommend_spec}
                            id={id + '_spec'}
                        />
                    </p>
                </Scrollbar>
            </div>
        </div>
    )
}

const Recommendation_image = (props) => {
    let image = props.image
    let id = props.id
    return (
        <div className='Recommendation_block_image_container'>
            <img
                src={image}
                alt='Recommendation_block_image'
                className='Recommendation_block_image'
                id={id}
            />
        </div>
    )
}

// const Recommendation_title = (props) => {
//     let title = props.title.title;
//     let name = props.title.name;
//     let desire_work_type = props.title.desire_work_type;
//     let id = props.id;
//     return (
//         <div className='Recommendation_block_title_container'>
//             <p className='Recommendation_block_title' id={id}>{title}</p>
//             <p className="Recommendation_block_subtitle">{name}  asking for  {desire_work_type}</p>
//         </div>
//     )
// }

const Recommendation_info = (props) => {
    let contact = props.info.contact
    let email = props.info.email
    let diploma = props.info.diploma
    let id = props.id
    return (
        <div className='Recommendation_block_info_div mb-2'>
            <p className='Recommendation_block_info_lg'>
                <td className='Recommendation_block_salary'>{diploma} </td>
                <td>
                    {' '}
                    | {contact} | {email}
                </td>
            </p>
            <p className='Recommendation_block_info_sm'>
                <p className='Recommendation_block_salary'>{diploma} </p>
                <p>{contact}</p>
                <p>{email}</p>
            </p>
        </div>
    )
}

const Recommendation_spec = (props) => {
    let experience = props.spec.experience.split('\n').map((i) => {
        return <li>{i}</li>
    })
    let speciality = props.spec.speciality.split('\n').map((i) => {
        return <li>{i}</li>
    })
    let id = props.id
    return (
        <div className='Recommendation_block_spec_div'>
            <p className='Recommendation_block_requirement' id={id}>
                <li id='Recommendation_requirement_li'>個人簡歷：</li>
                {experience}
            </p>
            <p className='Recommendation_block_requirement' id={id}>
                <li id='Recommendation_requirement_li'>專業技能：</li>
                {speciality}
            </p>
        </div>
    )
}
