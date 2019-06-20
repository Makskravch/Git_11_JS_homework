import React from 'react';

const AddPair = ({addNewPair}) => {
    let boyInp, girlInp
    return (
        <>
            <label>
                Boy name:
                <input ref={node => boyInp = node} />
            </label>
            <label>
                Girl name:
                <input ref={node => girlInp = node} />
            </label>
            <button onClick={() => addNewPair(boyInp.value, girlInp.value)}>
                Add new pair
            </button>
        </>
    );
}
 
export default AddPair;