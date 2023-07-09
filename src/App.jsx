import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import MenuDropdown from "./components/menu"
import RadioGroup from "./components/radioGroup";
import Buttons from './components/button';
import Sidebar from './components/sidebar';
import Table from './components/table';
import Modal from './components/modal.jsx';
import FilterModal from './components/filterModal';

function App() {
  const radioFilters = [
    {
        label: 'Hepsi',
        value: 'all'
    },
    {
        label: 'Favorites',
        value: 'favorite'
    }
    
]
  const [radioFilter, setRadioFilter] = useState(radioFilters[0])
  const [radioValue, setRadioValue] = useState('all')
  const [title, setTitle] = useState()

  useEffect(() => {
    async function handleChange() {
        const filter = radioFilters.filter(x => x.value === radioValue)
        setRadioFilter(filter[0])
        
    }

    handleChange()
}, [radioValue])

  const items = [
    {
      name: "Deneme",
      icon: "deneme",
      click: () => {
        console.log("deneme")
      }
    },
    {
      name: "Deneme2",
      icon: "deneme2",
      click: () => {
        console.log("deneme2")
      }
    },
  ]
  const click = () => {
    setOpen(!open)
  }
  const [open, setOpen] = useState(false)
  const [viewModal, setViewModal] = useState(false)

  const tableData = [
    {
      id: 1,
      name: 'task1',
      status: 'done',
      description: 'deneme'
    },
    {
      id: 2,
      name: 'task2',
      status: 'done',
      description: 'deneme'
    },
    {
      id: 3,
      name: 'task3',
      status: 'done',
      description: 'deneme'
    },
    {
      id: 4,
      name: 'task4',
      status: 'done',
      description: 'deneme'
    },
    {
      id: 5,
      name: 'task5',
      status: 'done',
      description: 'deneme'
    },
  ]
  
  const modalContent = () => {
    return (
      <div>
        Alert Modal
      </div>
    )
  }

  const filterContent = () => {
    return (
      <div>
        Filter Modal
      </div>
    )
  }

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} name='Deneme'></Sidebar>
      <div>
        <Buttons click={click} color='#8674fa' name='Deneme'></Buttons>
      </div>
      <RadioGroup onChange={(e) => {setRadioValue(e)}} initialState={radioFilter.value} options={radioFilters}></RadioGroup>
      <Table tableData={tableData} titles={[{name: '#', sort: false},{name: 'title1', sort: false}, {name: 'title2', sort: false}, {name: 'title3', sort: false}, {name: '', sort: false}]} setTitle={setTitle}>
                        {   tableData &&
                            tableData.map((task) => {
                                return(
                                    <Row key={task.id}>
                                      <Field>
                                            {task.id}
                                        </Field>
                                        <Field>
                                            <Bold>
                                                    {task.name}
                                            </Bold>
                                        </Field>
                                        <Field>
                                            {task.status}
                                        </Field>
                                        <Field>
                                            <Text>{task.description}</Text>
                                        </Field>
                                        <Field>
                                          <MenuDropdown items={items}></MenuDropdown>
                                        </Field>
                                    </Row>
                                )
                            })
                        }

                    </Table>
      <button onClick={() => setViewModal(true)}>Alert Modal</button>
      <FilterModal filterContent={filterContent}></FilterModal>
      {
        viewModal &&
        <Modal
            title='Filtreleri Kaydet'
            type="alert"
            size={"l"}
            close={() => {
                setViewModal(false)
            }}
            content={modalContent()}
        />
      }
    </div>
  );
}

const Row = styled.tr`
    border-bottom: 2px solid #e5eaf3;
    &:hover {
      background-color: #fbfbfe;
      cursor: pointer;
    }
`;

const Field = styled.td`
    max-width: 200px;
    padding: 12px 15px;
    vertical-align: middle;
    & > img {
        width: 30px;
    }
    & > i {
        font-size: 30px;
    }
    
`;

const Text = styled.span`
    padding: 1px 0px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
    color: #06090F;
`;

const Bold = styled.b`
    font-weight: 700;
`;

export default App;
