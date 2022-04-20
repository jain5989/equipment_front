import axios from 'axios'
import React, { useEffect, useState } from "react"

const Equipment = () => {
  const [equipments, setEquipments] = useState([])
  const url = 'https://0toa3ot9t3.execute-api.us-west-1.amazonaws.com/dev/equipment/search?limit=2'

  const fetchData = async () => {
    const response = await axios.get(url, { headers : {
        "x-api-key":"80Au0pl6lz795GM6wC4768bZaT1mU2Og5kvYj441"
    },
    'Access-Control-Allow-Credentials':true
})
    const data = await response.data
    setEquipments(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {equipments.length > 0 && (
        <table>
          {equipments.map(equipment => (
             <tr>
             <td>{equipment.equipmentNumber}</td>
             <td>{equipment.address}</td>
             <td>{equipment.contractEndDate}</td>
             <td>{equipment.contractStartDate}</td>
             <td>{equipment.status}</td>
             </tr>
          ))}
        </table>
      )}
    </div>
  )
}

export default Equipment