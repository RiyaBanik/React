import React from 'react'

const ReadOnlyRow = ({ contact }) => {
    return (

 <tr>
                       <td>{contact.name}</td>
                       <td>{contact.phone}</td>
                       <td>{contact.email}</td>
                       <td>{contact.address.geo.lat}</td>
                       <td>{contact.address.geo.lng}</td>
                       <td><button>Add</button><button>Delete</button></td>
                   </tr>
    )
}
export default ReadOnlyRow;