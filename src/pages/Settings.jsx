import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/NoteContext';
import { Link } from 'react-router-dom';
const Settings = () => {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle('Settings Component...')
  }, [])

  const options = [
    {
      header: {
        name: "Account",
      },
      values: [
        {
          name: "Anurag Prajapati",
          description: "owner for this site",
          tags: ["credit card"],
        },
        {
          name: "Technology",
          description: "React JavaScript Developer",
          tags: [],
        },
        {
          name: "Compony Name",
          description: "YuvaSoft Technology PVT.LTD",
          tags: [],
        },
        {
          name: "Experience",
          description: "2 Year Working Experence ",
          tags: [],
        },
      ],
    },
    {
      header: {
        name: "Application"
      },
      values: [
        {
          name: "Billing Information",
          description: "Manage Your Billing Information.",
          tags: ["credit card"],
        },
        {
          name: "Sales Invoice",
          description: "Sales Goods Billing Invoice",
          tags: [],
        },
        {
          name: "Purchase Invoice",
          description: "Purchase Goods Billing Invoice",
          tags: [],
        }
      ],
    },
    {
      header: {
        name: "Billing"
      },
      values: [
        {
          name: "Billing Information",
          description: "Manage Your Billing Information.",
          tags: ["credit card"],
        },
        {
          name: "Sales Invoice",
          description: "Sales Goods Billing Invoice",
          tags: [],
        },
        {
          name: "Purchase Invoice",
          description: "Purchase Goods Billing Invoice",
          tags: [],
        }
      ]
    },
    {
      header: {
        name: "Support"
      },
      values: [
        {
          name: "Halp",
          description: "How Can a Halp You",
          tags: [],
        },
        {
          name: "FAQ",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
        {
          name: "DAF",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
        {
          name: "CEF",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
        {
          name: "FFF",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
        {
          name: "GGG",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
        {
          name: "FFG",
          description: "veiw your ask quetions amd answer",
          tags: []
        },
      ]
    }

  ]

  const [visibleOptions, setVisibleOptions] = useState(options);

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value

    if (value.trim().length === 0) {
      setVisibleOptions(options);
      return;
    }
    const returnedItem = [];

    visibleOptions.forEach((option, index) => {
      const foundOptions = option.values.filter(item => {
        return item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1 || item.description.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1;
      })

      returnedItem[index] = {
        header: {
          name: option.header.name
        },
        values: foundOptions,
      }

      if (option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1){
        returnedItem[index] = {
          header: {
            name: option.header.name
          },
          values: options[index].values,
        }
      }
    })
    setVisibleOptions(returnedItem)
  }

  return (
    <>
      <div className='container'>
        <h1>
          <span>
            <button className='btn btn-secondary' >
              {" "}
              <span>&lt;</span>Black{" "}
            </button>{" "}
            Settings
          </span>
        </h1>
        <input type="search"
          placeholder='Serach Here'
          className='form-control mt-5'
          style={{ width: "100%" }}
          onChange={onChange}
        />
        <br />
        <p style={{float:"right"}}>Go To Home Page <Link to="/">Home</Link></p>
        <div>
          {
            visibleOptions.map(option =>
              <div key={option.header.name} className="mt-5 mt-2">
                <h3>{option.header.name}</h3>


                <div>
                  {option.values.map((value) => (
                    <div key={value.name}>
                      <ul className='list-group'>
                        <li className='list-group-item mb-2 ' >
                          <h6 className='font-weight-bold' >{value.name}</h6>
                          <p>{value.description}</p>
                        </li>
                      </ul>
                    </div>))}
                </div>
              </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Settings;