import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import './AddProgram.css'
import { Modal, Form, } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddProgram() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [communities, setCommunities] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [categores, setCategores] = useState([])

  const [name_arm, setName_arm] = useState("")
  const [name_eng, setName_eng] = useState("")
  const [community, setCommunity] = useState("Համայնք")
  const [budge, setBudge] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [manager_arm, setManager_arm] = useState("")
  const [manager_eng, setManager_eng] = useState("")
  const [contactPerson_arm, setContactPerson_arm] = useState("")
  const [contactPerson_eng, setContactPerson_eng] = useState("")
  const [organization, setOrganization] = useState("Կազմակերպություն")
  const [categor_support, setCategor_support] = useState([])
  const [description_arm, setDescription_arm] = useState("")
  const [description_eng, setDescription_eng] = useState("")
  const [status, setStatus] = useState("")
  const [isSelect, setIsSelect] = useState([])
  const [isDonor, setIsDonor] = useState(false)

  const [arrow_icon_city, setArrow_iconCity] = useState(false)
  const [arrow_icon_org, setArrow_iconOrg] = useState(false)
  const [arrow_icon_status, setArrow_iconStatus] = useState(false)
  const [arrow_icon_category, setArrow_iconCategory] = useState(false)
  const [array, setArray] = useState([])
  const [checkedCategory, setCheckedCategory] = useState([])
  const [openCategory, setOpenCategory] = useState([])



  useEffect(() => {

    fetch('/api/organizations')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setOrganizations(data.data)

      }).catch(err => {
        console.log(err);
      })

    fetch('/api/communities')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setCommunities(data.data)

      }).catch(err => {
        console.log(err);
      })

    fetch('/api/supportsList')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategores(data)

      }).catch(err => {
        console.log(err);
      })

  }, [])



  async function addProject() {

    let body = {
      name_arm, name_eng, community, budge, startDate, endDate, manager_arm, manager_eng, contactPerson_arm, contactPerson_eng, organization, categor_support,
      description_arm, description_eng, status, isDonor
    }

    console.log(name_arm, name_eng, community, budge, startDate, endDate, manager_arm, manager_eng, contactPerson_arm, contactPerson_eng, organization, categor_support,
      description_arm, description_eng, status, isDonor);

    body = JSON.stringify(body)
    const headers = {}
    headers["Content-Type"] = "application/json"
    const res = await fetch('/api/addProgram', {
      method: 'POST',
      body,
      headers
    });

    console.log(res)
  }




  const onValueChange = (event) => {
    // console.log(event.target.value);
    setStatus(event.target.value)
  }

  const selectSupport = (e, supportId, categoryId, id) => {

    // console.log("Idaaaaaaa", id);

    if (isSelect.some(item => item.Id === id && item.supportid === supportId)) {


      let index = isSelect.findIndex(item => item.Id === id && item.supportid === supportId);
      // console.log("index", index);
      isSelect.splice(index, 1)

      for (let i = 0; i < array.length; i++) {
        if (array[i].supportid === supportId && array[i].categoryid === categoryId) {
          array.splice(i, 1)
        }
      }
      // console.log("array hanec", array);
    }
    else {
      isSelect.push({ Id: id, supportid: supportId })
      array.push({
        categoryid: categoryId,
        supportid: supportId
      })
      // console.log("array avelacrec", array);

    }
    setIsSelect([...isSelect])
    console.log("isSelect1", isSelect);
    setCategor_support(array)
  }

  const openCategores = (id) => {
    if (openCategory.some(item => item === id)) {
      let index = openCategory.findIndex(item => item === id);
      openCategory.splice(index, 1)
      setOpenCategory([...openCategory])

    } else {
      openCategory.push(id)
      setOpenCategory([...openCategory])
    }
    console.log(openCategory);
  }


  const checkCategory = (e, category) => {

    if (checkedCategory.some(item => item === category.id)) {
      let index = checkedCategory.findIndex(item => item === category.id);
      checkedCategory.splice(index, 1)
      setCheckedCategory([...checkedCategory])

    } else {
      checkedCategory.push(category.id)
      setCheckedCategory([...checkedCategory])
    }

    console.log(checkedCategory);
    if (checkedCategory.some(item => item === category.id)) {
      for (let i = 0; i < category.items.length; i++) {
        if (isSelect.some(item => item.Id === category.id && item.supportid === category.items[i].supportid)) {



        }
        else {
          isSelect.push({
            Id: category.id,
            supportid: category.items[i].supportid
          })
        }
      }
    } else {
      for (let i = 0; i < category.items.length; i++) {
        if (isSelect.some(item => item.Id === category.id && item.supportid === category.items[i].supportid)) {

          let index = isSelect.findIndex(item => item.Id === category.id && item.supportid === category.items[i].supportid);
          isSelect.splice(index, 1)

        }
        else {

        }
      }
    }
    console.log("select", isSelect);

  }

  return (
    <div>
      <div >
        <img src={require("../AdminIcons/add.svg").default} />
        <button variant="primary" className="button_add" onClick={handleShow}>
          Ավելացնել
</button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <div className="project_name">
            <label className="project_name_label">Ծրագրի անուն (Հայերեն)</label>
            <input className="project_name_input" placeholder="Ծրագրի անուն հայերեն" value={name_arm} onChange={e => setName_arm(e.target.value)} />

          </div>
          <div className="project_name">
            <label className="project_name_label">Ծրագրի անուն (English)</label>
            <input className="project_name_input" placeholder="Project name in English" value={name_eng} onChange={e => setName_eng(e.target.value)} />
          </div>

          <div className='project_name'>
            <label className="cities">Համայնք</label>
            <button className='btnSities' onClick={() => { setArrow_iconCity(!arrow_icon_city) }}>
              <label className="label_city" >{community} </label>

            </button>
            <img className="arrow_icon" src={require("../AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconCity(!arrow_icon_city) }} />

            {
              arrow_icon_city == true ? (

                <div className="NestedSelect">

                  {communities.map((city) => (
                    <div className='list city'>
                      <li className='li1' key={city.name_arm} onClick={() => setCommunity(city.name_arm)} >{city.name_arm}</li>
                    </div>
                  ))}
                </div>
              ) : null
            }
          </div>

          {/* budget-i inputnery */}
          <div className="project_name">
            <label className="budge_name">Բյուջե</label>
            <input className="budge_input" placeholder="Բյուջե հայերեն" value={budge} onChange={e => setBudge(e.target.value)} />
            <Form.Control as="select" className="usd_input">
              <option >USD</option>
            </Form.Control>
          </div>

          {/* date-eri inputnery */}
          <div className="display_flex">

            <div className="start">
              <label className="start_date_label">Սկիզբ</label>

              <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="dateStart" />
            </div>
            <div className="end">
              <label className="end_date_label">Ավարտ</label>
              <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="dateEnd" />
            </div>

          </div>

          {/* xekavari input-nery */}
          <div className="project_name">
            <label className="project_name_label">Ծրագրի ղեկավար (Հայերեն)</label>
            <input className="project_name_input" placeholder="Անուն, Ազգանուն" value={manager_arm} onChange={e => setManager_arm(e.target.value)} />

          </div>
          <div className="project_name">
            <label className="project_name_label">Ծրագրի ղեկավար (English)</label>
            <input className="project_name_input" placeholder="Fistname, Lastname" value={manager_eng} onChange={e => setManager_eng(e.target.value)} />
          </div>

          {/* contactPerson-i input-nery */}
          <div className="project_name">
            <label className="project_name_label">Կոնտակտ անձ (Հայերեն)</label>
            <input className="project_name_input" placeholder="Անուն, Ազգանուն" value={contactPerson_arm} onChange={e => setContactPerson_arm(e.target.value)} />

          </div>
          <div className="project_name">
            <label className="project_name_label">Կոնտակտ անձ (Անգլերեն)</label>
            <input className="project_name_input" placeholder="Fistname, Lastname" value={contactPerson_eng} onChange={e => setContactPerson_eng(e.target.value)} />
          </div>

          {/* organizationi input-nery */}
          <div className='project_name'>
            <label className="kazmakerp_arm">Կազմակերպություններ</label>
            <button className='btnSities' onClick={() => { setArrow_iconOrg(!arrow_icon_org) }}>
              <label placeholder="Համայնք" className="label_city" >{organization} </label>
            </button>
            <img className="arrow_icon" src={require("../AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconOrg(!arrow_icon_org) }} />

            {
              arrow_icon_org == true ? (
                <div className="NestedSelect">
                  {organizations.map((organization) => (
                    <div className='list city'>

                      <li className='li1' key={organizations.name_arm} onClick={() => setOrganization(organization.name_arm)} >{organization.name_arm}</li>

                    </div>
                  ))}
                </div>
              ) : null
            }
          </div>


          {/* support_type input-nery */}

          <div className="project_name">
            <label className="support_type">Աջակցության տեսակ(ներ)</label>

            <button className='btnSities' id='btnSelect' onClick={() => { setArrow_iconCategory(!arrow_icon_category) }}>
              <label className="label_city">Support Type</label>
            </button>
            <img className="arrow_icon" src={require("../AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconCategory(!arrow_icon_category) }} />
            {
              arrow_icon_category == true ? (
                <div className="nested">
                  {categores.map((categore) => (

                    <div className='list' >

                      <ul className='ul' >
                        <div className='supportList'>
                          <input type="checkbox" id='check' className="checkbox" onClick={(e) => checkCategory(e, categore)}
                          />
                        </div>
                        <label className="category_name">{categore.category_arm}</label>

                        <img className='arrowSelect' src={require("../AdminIcons/arrow.svg").default} onClick={(e) => openCategores(categore.id)} />
                        {
                          openCategory.some(item => item === categore.id) ? (
                            <div className="support_types" >


                              {categore.items.map(support => (
                                <li style={{
                                  backgroundColor: isSelect.some(item => item.Id === categore.id && item.supportid === support.supportid) ? '#A4C2D8' : '#FAFAFA',


                                }} className="li" onClick={(e) => selectSupport(e, support.supportid, categore.categoryid, categore.id)}>
                                  {support.name_arm}
                                </li>
                              ))}


                            </div>
                          ) : null
                        }
                      </ul>

                    </div>
                  ))}
                </div>
              ) : null
            }
          </div>


          {/* discriptionneri input-nery */}
          <div className="project_name">
            <label className="project_name_label">Նկարագրություն (Հայերեն)</label>
            <input className="description_input" placeholder="Հակիրճ նկարագրություն" value={description_arm} onChange={e => setDescription_arm(e.target.value)} />

          </div>
          <div className="project_name">
            <label className="project_name_label">Նկարագրություն (English)</label>
            <input className="description_input" placeholder="Brief description" value={description_eng} onChange={e => setDescription_eng(e.target.value)} />
          </div>

          {/* status-i inputnery */}
          <div className="project_name">
            <label className="status">Կարգավիճակ</label>
            <button className='btnSities' id='btnSelect' onClick={() => { setArrow_iconStatus(!arrow_icon_status) }}>
              <label className="label_city">{status}</label>
            </button>
            <img className="arrow_icon" src={require("../AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconStatus(!setArrow_iconStatus) }} />
            {
              arrow_icon_status == true ? (
                <div className="select_status">

                  <div className='list city'>
                    <div className="radio">
                      <input type="radio" id="Ընթացիկ" className="radio1" value="Ընթացիկ" checked={status === "Ընթացիկ"}
                        onChange={(e) => onValueChange(e)} onClick={() => setStatus("Ընթացիկ")}></input>
                      <li className='li1' >Ընթացիկ</li>
                    </div>
                    <div className="radio">
                      <input id="Ավարտված" type="radio" className="radio2" value="Ավարտված" checked={status === "Ավարտված"}
                        onChange={(e) => onValueChange(e)} onClick={() => setStatus("Ավարտված")}></input>
                      <li className='li1' >Ավարտված</li>
                    </div>
                  </div>

                </div>
              ) : null
            }
          </div>
          <div className="donor">
            <label className="donor_label">Դոնոր</label>
            <input type="checkbox" id='donor' className="isDonor" value={isDonor} onClick={() => { setIsDonor(!isDonor) }} />
          </div>

          <div className="btn_popup">
            <button className="cancel">Չեղարկել</button>
            <button className="save" onClick={addProject}>Հաստատել</button>
          </div>
        </Modal.Body>
      </Modal>

    </div>

  );
}

export default AddProgram;