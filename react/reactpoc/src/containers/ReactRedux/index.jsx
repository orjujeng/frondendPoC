import ReactRedux from '../../components/ReactRedux'
import {connect} from 'react-redux'
function a(states){
    return {count:states}
}

function b(dispatch){
    return {add:(data)=>{
        dispatch({type:"increment",data:data});
    }}
}
export default connect(a,b)(ReactRedux)