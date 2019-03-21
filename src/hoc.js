import React , {Component} from 'react'
import './hoc.css'
const Hoc = (WrappedComponent) => {
    return class Hoc extends Component{
        render () {
            return this.props.isloading?<div class="lds-dual-ring"></div>:<WrappedComponent{...this.props}/>
        }
     

    }

}
export default Hoc;