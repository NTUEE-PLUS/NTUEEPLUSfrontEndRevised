import React from 'react'

// TODO
// image need to be import

/* ====================== Profile Components ====================== */

/* =================== Contact ================== */

const Contact = ({
    email,
    email_checkbox,
    address,
    address_checkbox,
    phone_company,
    phone_company_checkbox,
    phone_home,
    phone_home_checkbox,
    mobile,
    mobile_checkbox,
    handleInputChange,
    handleCheckChange,
    expandElement,
}) => {
    const expand = (e) => {
        e.preventDefault()
        expandElement(
            'Profile_expand_phone',
            'hr4',
            'Profile_expand_icon_1',
            '2rem',
            '0rem'
        )
    }
    return (
        <div id='Profile_more_info'>
            <InputRow
                labelText='Email:'
                value={{ data: email, show: email_checkbox }}
                inputChange={handleInputChange}
                checkChange={handleCheckChange}
                name='email'
            />
            <InputRow
                labelText='Living Address:'
                value={{ data: address, show: address_checkbox }}
                inputChange={handleInputChange}
                checkChange={handleCheckChange}
                name='address'
            />
            <ExpandRow
                labelClass='col-form-label col-5 Profile_info_label'
                labelText='Phone(Office):'
                inputClass='form-control col-5 ml-auto Profile_info_input'
                value={{ data: phone_company, show: phone_company_checkbox }}
                inputChange={handleInputChange}
                checkChange={handleCheckChange}
                name='phone_company'
                expand={expand}
                imgID='Profile_expand_icon_1'
            />

            <div id='Profile_expand_phone'>
                <InputRow
                    labelText='Phone(Home):'
                    value={{ data: phone_home, show: phone_home_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='phone_home'
                />
                <InputRow
                    labelText='Mobile:'
                    value={{ data: mobile, show: mobile_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='mobile'
                />
            </div>
        </div>
    )
}

/* =================== Contact ================== */

/* =================== Diploma ================== */

const Diploma = ({
    major,
    major_checkbox,
    double_major,
    double_major_checkbox,
    minor,
    minor_checkbox,
    master,
    master_checkbox,
    doctor,
    doctor_checkbox,
    handleInputChange,
    handleCheckChange,
    expandElement,
}) => {
    const expand = (e) => {
        e.preventDefault()
        expandElement(
            'Profile_expand_diploma',
            'hr41',
            'Profile_expand_icon_3',
            '1rem',
            '1rem'
        )
    }
    return (
        <div id='Profile_diploma_container'>
            <ExpandRow
                labelClass='col-form-label col-4 Profile_info_label'
                inputClass='form-control col-5 ml-auto offset-1 Profile_info_input'
                labelText='Bachelor Major:'
                value={{ data: major, show: major_checkbox }}
                inputChange={handleInputChange}
                checkChange={handleCheckChange}
                name='major'
                expand={expand}
                imgID='Profile_expand_icon_3'
            />
            <div id='Profile_expand_diploma'>
                <DiplomaElement
                    labelText='Double:'
                    value={{ data: double_major, show: double_major_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='double_major'
                />
                <DiplomaElement
                    labelText='Minor:'
                    value={{ data: minor, show: minor_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='minor'
                />
                <DiplomaElement
                    labelText='Master:'
                    value={{ data: master, show: master_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='master'
                />
                <DiplomaElement
                    labelText='Doctor:'
                    value={{ data: doctor, show: doctor_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='doctor'
                />
            </div>
        </div>
    )
}

/* =================== HeadShot ================== */

const HeadShot = ({ imagePreviewUrl, handleImageChange }) => {
    return (
        <div id='Profile_userimage_container' className='mt-3'>
            <div className='d-flex justify-content-center'>
                <img
                    src={imagePreviewUrl}
                    id='Profile_userimage'
                    className='img-fluid'
                />
            </div>
            <label
                id='Profile_userimage_change'
                className='mt-2 d-flex justify-content-center'
            >
                <input
                    type='file'
                    id='Profile_head_shot'
                    onChange={handleImageChange}
                    name='userimage'
                    accept='image/*'
                    style={{ display: 'none' }}
                />
                <span id='Profile_addImage_icon'>
                    ➕<p style={{ display: 'inline' }}>Add Head Shot</p>
                </span>
            </label>
        </div>
    )
}

/* =================== HeadShot ================== */

/* ==================== Header =================== */

const Header = ({ onClick }) => {
    return (
        <div id='hr0' className='ml-1 mt-2 d-flex justify-content-between'>
            <p className='Profile_main_title'>Profile Setting</p>
            <button className='btn Profile_edit_btn pl-0' onClick={onClick}>
                <img src={data.edit} className='img-fluid Profile_edit_icon' />
                <p className='d-none d-sm-inline'>Edit</p>
            </button>
        </div>
    )
}

/* ==================== Header =================== */

/* ===================== Info ==================== */

const Info = ({
    realname,
    realname_checkbox,
    nickname,
    nickname_checkbox,
    shortintro,
    handleInputChange,
    handleCheckChange,
}) => {
    return (
        <div id='Profile_info'>
            <div id='Profile_name' className='mb-4'>
                <InputRow
                    labelText='Realname:'
                    value={{ data: realname, show: realname_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='realname'
                />
                <InputRow
                    labelText='Nickname:'
                    value={{ data: nickname, show: nickname_checkbox }}
                    inputChange={handleInputChange}
                    checkChange={handleCheckChange}
                    name='nickname'
                />
            </div>
            <div>
                <p className='Profile_info_label'>Talk about yourself:</p>
                <textarea
                    id='Profile_shortintro'
                    name='shortintro'
                    placeholder='briefly introduce yourself!'
                    value={shortintro}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

/* ===================== Info ==================== */

/* ===================== ExpandRow ==================== */

const ExpandRow = ({
    labelClass,
    inputClass,
    imgID,
    labelText,
    name,
    value: { data, show },
    expand,
    inputChange,
    checkChange,
}) => {
    return (
        <div className='form-group row mx-auto'>
            <label className={labelClass}>{labelText}</label>
            <button className='Profile_expand_button' onClick={expand}>
                <img
                    className='Profile_expand_icon'
                    id={imgID}
                    src={show_more}
                    alt='show_more'
                />
            </button>
            {/* <input type="checkbox"
            checked={show}
            onChange={checkChange}
            name={`${name}_checkbox`}
        /> */}
            <input
                id='Profile_phone_company'
                className={inputClass}
                value={data}
                onChange={inputChange}
                name={name}
                onFocus={expand}
            />
        </div>
    )
}

/* ===================== ExpandRow ==================== */

/* ===================== InputRow ==================== */

const InputRow = ({
    labelText,
    value: { data, show },
    name,
    inputChange,
    checkChange,
}) => {
    return (
        <div className='form-group row mx-auto'>
            <label className='col-form-label col-4 Profile_info_label'>
                {labelText}
            </label>
            {/* <input type="checkbox"
            className="Profile_input_checkbox"
            checked={show}
            onChange={checkChange}
            name={`${name}_checkbox`}
        /> */}
            <input
                className='Profile_input_nonfloat form-control col-7 col-md-6 col-xl-5 offset-1 offset-md-2 offset-xl-3 Profile_info_input'
                value={data}
                onChange={inputChange}
                name={name}
            />
        </div>
    )
}

/* ===================== InputRow ==================== */

/* ===================== Occupation ==================== */

const OccupationTD = ({ readOnly, value, onChange }) => {
    return (
        <td>
            <input
                className='Profile_info_table_input Profile_info_input'
                readOnly={readOnly}
                value={value}
                onChange={onChange}
            />
        </td>
    )
}

const Occupation = ({ work, handleChange, rmOccupation, editmode }) => {
    return work.map(({ O, P, C, show }, index) => {
        return (
            <tr>
                <OccupationTD
                    readOnly={editmode ? false : true}
                    value={O}
                    onChange={handleChange(index, 'P')}
                />
                <OccupationTD
                    readOnly={editmode ? false : true}
                    value={P}
                    onChange={handleChange(index, 'P')}
                />
                <OccupationTD
                    readOnly={editmode ? false : true}
                    value={C}
                    onChange={handleChange(index, 'C')}
                />
                <td>
                    <button
                        id='Profile_removeOccupation'
                        onClick={rmOccupation(index)}
                    >
                        <img
                            src={remove_icon}
                            className='Profile_remove_icon'
                            alt='remove_icon'
                        />
                    </button>
                </td>
            </tr>
        )
    })
}

/* ===================== Occupation ==================== */

/* ===================== Occupation Table ==================== */
const OccupationTable = ({
    addOcp,
    work,
    handleWorkChange,
    rmOccupation,
    editmode,
}) => {
    return (
        <table className='table table-responsive col-12'>
            <thead>
                <tr style={{ borderBottom: '2px white solid' }}>
                    <th>Occupation</th>
                    <th>Position</th>
                    <th>Company</th>
                    <th>
                        <button onClick={addOcp} id='Profile_addOccupation'>
                            <img
                                src={add_icon}
                                alt='add_icon'
                                className='Profile_remove_icon'
                            />
                        </button>
                    </th>
                </tr>
                <Occupation
                    work={work}
                    handleChange={handleWorkChange}
                    rmOccupation={rmOccupation}
                    editmode={editmode}
                />
            </thead>
        </table>
    )
}
/* ===================== Occupation Table ==================== */

/* ====================== Profile Components ====================== */
