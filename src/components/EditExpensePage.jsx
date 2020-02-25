import React from 'react'

const EditExpensePage = (props) =>{
  return (
     <div>
     EDIT {props.match.params.id}
     </div>)
};

export default EditExpensePage;