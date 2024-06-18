import React, { useState } from 'react';
import './Account_name.css';  // Ensure your CSS file has appropriate styles
import { useDispatch, useSelector } from 'react-redux';
import { getPseudo } from '../../actions/pseudo.action';  // Ensure correct action name and path

const AccountName = ({ prenom, nom, pseudo}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPseudo, setNewPseudo] = useState(pseudo || "") ;  // Changed to camelCase for consistency

  // Handlers for modal operations
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log(newPseudo) // Prevent the default form submission behavior
    dispatch(getPseudo({ newPseudo,token })) ; // Assume token is needed based on your props
    handleCloseModal();
  };

  return (
    <div className="header">
      <h1>Welcome back<br />{prenom} {nom}!</h1>
      <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleFormSubmit}>
              <h1>Pseudo: {pseudo}</h1>
              <label htmlFor="newPseudo">New Pseudo:</label>
              <input
                id="newPseudo"
                type="text"
                value={newPseudo}
                onChange={(e) => setNewPseudo(e.target.value)}  // Updates state on each key press
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountName;  // Updated component name to follow CamelCase convention
