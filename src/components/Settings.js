import React from 'react'

class Settings extends React.Component{
    render(){
        return (
            <div className='Settings'>
                <div className='main-title'>25 + 5 Clock</div>
                <div className= 'length-container'>


                    <div className= 'length-control'>
                        <div className='label' id='break-label'>Break Length</div>
                        <button className='btn-level' id='break-decrement' value='-' onClick={this.props.handleBreakChange}>
                            <i className='fa fa-arrow-down fa-2x'></i>
                        </button>
                        <div id="break-length" className='value'>{this.props.breakLength}</div>
                        <button className='btn-level' id='break-increment' value='+' onClick={this.props.handleBreakChange}>
                            <i className='fa fa-arrow-up fa-2x'></i>
                        </button>
                    </div>


                    <div className= 'length-control'>
                        <div className='label' id='session-label'>Session Length</div>
                        <button className='btn-level' id='session-decrement' value='-' onClick={this.props.handleSessionChange}>
                            <i className='fa fa-arrow-down fa-2x'></i>
                        </button>
                        <div id="session-length" className='value'>{this.props.sessionLength}</div>
                        <button className='btn-level' id='session-increment' value='+' onClick={this.props.handleSessionChange}>
                            <i className='fa fa-arrow-up fa-2x'></i>
                        </button>
                    </div>


                </div>
            </div>
        )
    }
}
export default Settings