import React from 'react'

class Timer extends React.Component{
    render(){
        return (
            <div className='Timer'>
                <div className='timer-wrapper'>
                <div id='timer-label'>{this.props.timerType}</div>
                <div className='time-left' id="time-left">{this.props.timer}</div>                    
                </div>

            </div>
        )
    }
}
export default Timer