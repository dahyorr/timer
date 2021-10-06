import React from 'react'

class Controls extends React.Component{
    render(){
        return (
            <div className='Controls'>
                <button id='start_stop' onClick={this.props.startStopTimer}>
                    <i className='fa fa-play fa-2x'></i>
                    <i className='fa fa-pause fa-2x'></i>
                </button>
                <button id='reset' onClick={this.props.resetTimer}>
                    <i className='fa fa-sync fa-2x'></i>
                    </button>
            </div>
        )
    }
}
export default Controls