import { ACTIONS } from "../App"

const OperationButton = ({dispatch, operation}) => {
    return ( 
        <button 
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        className="operation-sign" >
            { operation }
        </button>
     );
}
 
export default OperationButton;