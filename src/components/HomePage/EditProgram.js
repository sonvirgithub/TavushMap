import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { ProgramContext } from "../../pages/ProgramsPage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function EditProgram({ prog, setProg, show, setShow, isSelect, setIsSelect }) {

  const programCont = useContext(ProgramContext);
  const [id, setId] = useState("");

  const [communities, setCommunities] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [categores, setCategores] = useState([{
    "categoryid": 24, "category": "volortik",
    "items": [{ "supportid": 1, "name": "support1" }, { "supportid": 2, "name": "support2" }]
  }])
  const [language, setLanguage] = useState("arm")
  const [start_date, setStartDate] = useState(new Date())
  const [end_date, setEndDate] = useState(new Date())

  const [arrow_icon_city, setArrow_iconCity] = useState(true)
  const [arrow_icon_org, setArrow_iconOrg] = useState(true)
  const [arrow_icon_status, setArrow_iconStatus] = useState(true)
  const [arrow_icon_category, setArrow_iconCategory] = useState(true)
  const [checkedCategory, setCheckedCategory] = useState([])
  const [openCategory, setOpenCategory] = useState([])
  const [categoryid_supportid, setCategoryid_Supportid] = useState([])



  useEffect(() => {

    fetch('/api/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrganizations(data.data)
      }).catch(err => {
        console.log(err);
      })

    fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language })
    })
      .then(res => res.json())
      .then(data => {
        setCommunities(data.data)
      }).catch(err => {
        console.log(err);
      })

    fetch('/api/supportsList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language })
    })
      .then(res => res.json())
      .then(data => {
        setCategores(data.data)
      }).catch(err => {
        console.log(err);
      })


  }, []);

 
  console.log("prog.status",prog.status);


  const selectCommunity = (city) => {
    let index = prog.community.findIndex(item => item.communityId == city.id);
    let arr = prog.community;

    if (index < 0) {
      arr.push(
        {
          communityId: city.id,
          community_arm: city.name
        }
      )
    } else {
      arr.splice(index, 1)
    }
    setProg({ ...prog, community: arr })


  }

  const selectOrganization = (organization) => {

    let index = prog.organization.findIndex(item => item.organizationId == organization.id);
    let arr = prog.organization;

    if (index < 0) {
      arr.push(
        {
          organizationId: organization.id,
          organization_arm: organization.name
        }
      )
    } else {
      arr.splice(index, 1)
    }
    setProg({ ...prog, organization: arr })


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
  }

  const handleClose = () => setShow(false);


  const handleSubmit = (evt) => {
    console.log("isselect", isSelect);
    console.log("prog", prog);
  };

  const selectSupport = (e, supportId, categoryId) => {

    if (isSelect.some(item => item.supportid === supportId)) {
      let index = isSelect.findIndex(item => item.supportid === supportId);
      isSelect.splice(index, 1)
    }
    else {
      isSelect.push({ supportid: supportId })
    }
    setIsSelect([...isSelect])

    setProg({ ...prog, support: isSelect })

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

    if (checkedCategory.some(item => item === category.id)) {
      for (let i = 0; i < category.items.length; i++) {
        if (isSelect.some(item => item.supportid === category.items[i].supportid)) {

        }
        else {
          isSelect.push({
            supportid: category.items[i].supportid
          })

        }
      }
    } else {
      for (let i = 0; i < category.items.length; i++) {
        if (isSelect.some(item => item.supportid === category.items[i].supportid)) {

          let index = isSelect.findIndex(item => item.supportid === category.items[i].supportid);
          isSelect.splice(index, 1)

        }
        else {

        }
      }
    }
    setProg({ ...prog, support: isSelect })
  }

  return (
    <>

      <Modal show={show} onHide={handleClose} animation={false}>
        {prog && Object.keys(prog).length ?
          <Modal.Body>

            <div className="project_name">
              <label className="project_name_label">Ծրագրի անուն (Հայերեն)</label>
              <input className="project_name_input" placeholder="Ծրագրի անուն հայերեն" value={prog.programName_arm} onChange={e => setProg({ ...prog, programName_arm: e.target.value, })} />

            </div>
            <div className="project_name">
              <label className="project_name_label">Ծրագրի անուն (English)</label>
              <input className="project_name_input" placeholder="Project name in English" value={prog.programName_eng} onChange={e => setProg({ ...prog, programName_eng: e.target.value, })} />
            </div>

            <div className='project_name'>
              <label className="cities">Համայնք</label>
              <button className='btnSities' onClick={() => { setArrow_iconCity(!arrow_icon_city) }}>
                <label className="label_city" >Համայնք </label>

              </button>
              <img className="arrow_icon" src={require("./AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconCity(!arrow_icon_city) }} />

              {
                arrow_icon_city == true ? (

                  <div className="NestedSelect">

                    {communities.map((city) => (
                      <div className='list city' key={city.id}>
                        <li style={{
                          backgroundColor: prog.community.some(item => item.communityId === city.id) ?
                            '#A4C2D8' : '#FAFAFA'
                        }} className='li1' onClick={() => selectCommunity(city)} >{city.name}</li>
                      </div>
                    ))}
                  </div>
                ) : null
              }
            </div>

            {/* budget-i inputnery */}
            <div className="project_name">
              <label className="budge_name">Բյուջե</label>
              <input className="budge_input" placeholder="10 000" value={prog.budget} onChange={e => setProg({ ...prog, budget: e.target.value, })} />
              <Form.Control as="select" className="usd_input">
                <option >USD</option>
              </Form.Control>
            </div>

            {/* date-eri inputnery */}
            <div className="display_flex">

              <div className="start">
                <label className="start_date_label">Սկիզբ</label>

                <DatePicker selected={start_date} onChange={date => setStartDate(date)} className="dateStart" closeOnScroll={true} />
              </div>
              <div className="end">
                <label className="end_date_label">Ավարտ</label>
                <DatePicker selected={end_date} onChange={date => setEndDate(date)} className="dateEnd" closeOnScroll={true} />
              </div>
            </div>

            {/* xekavari input-nery */}
            <div className="project_name">
              <label className="project_name_label">Ծրագրի ղեկավար (Հայերեն)</label>
              <input className="project_name_input" placeholder="Անուն, Ազգանուն" value={prog.manager_arm} onChange={e => setProg({ ...prog, manager_arm: e.target.value, })} />

            </div>
            <div className="project_name">
              <label className="project_name_label">Ծրագրի ղեկավար (English)</label>
              <input className="project_name_input" placeholder="Fistname, Lastname" value={prog.manager_eng} onChange={e => setProg({ ...prog, manager_eng: e.target.value, })} />
            </div>

            {/* contactPerson-i input-nery  */}
            <div className="project_name">
              <label className="project_name_label">Կոնտակտ անձ (Հայերեն)</label>
              <input className="project_name_input" placeholder="Անուն, Ազգանուն" value={prog.contact_arm} onChange={e => setProg({ ...prog, contact_arm: e.target.value, })} />

            </div>
            <div className="project_name">
              <label className="project_name_label">Կոնտակտ անձ (Անգլերեն)</label>
              <input className="project_name_input" placeholder="Fistname, Lastname" value={prog.contact_eng} onChange={e => setProg({ ...prog, contact_eng: e.target.value, })} />
            </div>

            {/* organizationi input-nery  */}
            <div className='project_name'>
              <label className="kazmakerp_arm">Կազմակերպություններ</label>
              <button className='btnSities' onClick={() => { setArrow_iconOrg(!arrow_icon_org) }}>
                <label className="label_city" >Կազմակերպություն </label>
              </button>
              <img className="arrow_icon" src={require("./AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconOrg(!arrow_icon_org) }} />

              {
                arrow_icon_org == true ? (
                  <div className="NestedSelect">
                    {organizations.map((organization) => (
                      <div className='list city' key={organization.id}>

                        <li className='li1' style={{
                          backgroundColor: prog.organization.some(item => item.organizationId === organization.id) ?
                            '#A4C2D8' : '#FAFAFA'
                        }} onClick={() => selectOrganization(organization)} >{organization.name}</li>

                      </div>
                    ))}
                  </div>
                ) : null
              }
            </div>


            {/* support_type input-nery  */}

            <div className="project_name">
              <label className="support_type">Աջակցության տեսակ(ներ)</label>

              <button className='btnSities' id='btnSelect' onClick={() => { setArrow_iconCategory(!arrow_icon_category) }}>
                <label className="label_city">Support Type</label>
              </button>
              <img className="arrow_icon" src={require("./AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconCategory(!arrow_icon_category) }} />
              {
                arrow_icon_category == true ? (
                  <div className="nested">
                    {categores.map((categore) => (

                      <div className='list' key={categore.id}>

                        <ul className='ul' >

                          <div className='supportList'>
                            <input type="checkbox" id='check' className="checkbox" onClick={(e) => checkCategory(e, categore)}
                            />
                          </div>

                          <label className="category_name">{categore.category} ({categore.items.length})</label>

                          <img className='arrowSelect' src={require("./AdminIcons/arrow.svg").default} onClick={(e) => openCategores(categore.categoryid)} />
                          {
                            openCategory.some(item => item === categore.categoryid) ? (
                              <div className="support_types" >


                                {categore.items.map(support => (
                                  <li style={{
                                    backgroundColor: isSelect.some(item => item.supportid === support.supportid) ? '#A4C2D8' : '#FAFAFA',

                                  }} className="li" onClick={(e) => selectSupport(e, support.supportid, categore.categoryid)}>
                                    {support.name}
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
              <input className="description_input" placeholder="Հակիրճ նկարագրություն" value={prog.description_arm} onChange={e => setProg({ ...prog, description_arm: e.target.value, })} />

            </div>
            <div className="project_name">
              <label className="project_name_label">Նկարագրություն (English)</label>
              <input className="description_input" placeholder="Brief description" value={prog.description_eng} onChange={e => setProg({ ...prog, description_eng: e.target.value, })} />
            </div>

            {/* status-i inputnery */}
            <div className="project_name">
              <label className="status">Կարգավիճակ</label>
              <button className='btnSities' id='btnSelect' onClick={() => { setArrow_iconStatus(!arrow_icon_status) }}>
                <label className="label_city">Կարգավիճակ</label>
              </button>
              <img className="arrow_icon" src={require("./AdminIcons/arrow.svg").default} onClick={() => { setArrow_iconStatus(!setArrow_iconStatus) }} />
              {
                arrow_icon_status == true ? (
                  <div className="select_status">

                    <div className='list city'>
                      <div className="radio">

                        <li style={{
                          backgroundColor: prog.status === 1 ?
                            '#A4C2D8' : '#FAFAFA'
                        }} className='li1' onClick={() => setProg({ ...prog, status: 1, })}>Ընթացիկ</li>
                      </div>
                      <div className="radio">

                        <li className='li1' style={{
                          backgroundColor: prog.status === 2 ?
                            '#A4C2D8' : '#FAFAFA'
                        }} onClick={() => setProg({ ...prog, status: 2, })}>Ավարտված</li>
                      </div>
                    </div>

                  </div>
                ) : null
              }
            </div>
            <div className="donor">
              <label className="donor_label">Դոնոր խմբի անդամ է</label>
              <input type="checkbox" id='donor' className="isDonor" value={prog.isDonor} checked={prog.isDonor} onClick={() => setProg({ ...prog, isDonor: !prog.isDonor, })} />
            </div>

            <div className="btn_popup">
              <button className="cancel" onClick={() => { handleClose() }}>Չեղարկել</button>
              <button className="save" onClick={() => { handleSubmit() }}>Հաստատել</button>
            </div>
          </Modal.Body>
          : <></>}
      </Modal>
    </>
  );
}

export default EditProgram;