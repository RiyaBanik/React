import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./contacts.json";
import ReadOnlyRow from "./components/ReadOnlyRow"
import editRow from "./components/editRow"
const App = () => {
    const [contacts, setContacts] = useState(data);
    return(
      <div className="app-container">
          <h2>Users</h2>
          <form>
          <table >
              <thead>
                  <tr >
                      <th>NAME</th>
                      <th>NUMBER</th>
                      <th>EMAIL</th>
                      <th>LATITUDE</th>
                      <th>LONGITUDE</th>
                      <th>ACTIONS</th>
                  </tr>
                  </thead>
              <tbody id="students">
                  {contacts.map((contact) =>(
                //        <tr>
                //        <td>{contact.name}</td>
                //        <td>{contact.phone}</td>
                //        <td>{contact.email}</td>
                //        <td>{contact.address.geo.lat}</td>
                //        <td>{contact.address.geo.lng}</td>
                //        <td></td>
                //    </tr>
                <Fragment>
                    <form><editRow /></form>
                    
                <ReadOnlyRow contact={contact}/>
                </Fragment>
                
            
                  ) )}
              </tbody>
              </table>
              </form></div>
    );
};
export default App;