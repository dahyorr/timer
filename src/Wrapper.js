import React from 'react'
import Controls from './components/Controls'
import Settings from './components/Settings'
import Timer from './components/Timer'

class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timer: '25:00',
            timerRunning: false,
            timerID: null,
            breakRun: false,
            timerType: 'Session'
            }
        this.audioRef = React.createRef()
        }

    countdown = () =>{
        let splitTime = this.state.timer.split(':')
        let time = (parseInt(splitTime[0]) * 60 )+ parseInt(splitTime[1])
        if (time > 0){
            time -= 1
            this.setState({
                timer: `${String(Math.floor(time/60)).padStart(2, '0')}:${String(time%60).padStart(2, '0')}`
            })
            if(time === 0 && this.state.breakRun === false){
                this.setState({
                    timerType: 'Break'
                })
            }
        }
        else{
            this.audioRef.current.play()
            if(this.state.breakRun){
                let sessionLength = this.state.sessionLength * 60
                this.setState({
                    timerType: 'Session',
                    breakRun: false,
                    timer: `${String(Math.floor(sessionLength/60)).padStart(2, '0')}:${String(sessionLength%60).padStart(2, '0')}`
                })
            }
            else{
                let breakLength = this.state.breakLength * 60
                this.setState({
                    timerType: "Break",
                    breakRun: true,
                    timer: `${String(Math.floor(breakLength/60)).padStart(2, '0')}:${String(breakLength%60).padStart(2, '0')}`
                })  
            }
        }
        console.log(time, this.state.timerType)
    }

    startStopTimer = () =>{
        if(this.state.timerRunning){
            clearInterval(this.state.timerID)
            this.setState({
                timerRunning: false,
                timerId: null
            })
        }
        else{

            let timerID = setInterval(this.countdown, 1000);
            this.setState({
                timerRunning: true,
                timerID: timerID
            })
        }
        
    }
    resetTimer = () =>{
        if(this.state.timerRunning) clearInterval(this.state.timerID) 
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timer: '25:00',
            timerRunning: false,
            timerID: null,
            breakStart: false,
            timerType: 'Session'
            })
        this.audioRef.current.pause()
        this.audioRef.current.currentTime = 0;
    }

    handleBreakChange = (e) =>{
        if (this.state.timerRunning) return null
        let value = this.state.breakLength
        if(value > 1 && e.currentTarget.value === '-')this.setState(
            {breakLength: value - 1})
        else if(value < 60 && e.currentTarget.value === '+')this.setState(
            {breakLength: value + 1})
        else return null
    } 
    handleSessionChange = (e) =>{
        if (this.state.timerRunning) return null
        let value = this.state.sessionLength
        if(value > 1 && e.currentTarget.value === '-')this.setState(
            {
                sessionLength: value - 1,
                timer: `${String(value-1).padStart(2, '0')}:00`
            })
        else if(value < 60 && e.currentTarget.value === '+')this.setState(
            {
                sessionLength: value + 1,
                timer: `${String(value+1).padStart(2, '0')}:00`
            }
            )
        else return null
    } 

    render(){
        return (
            <div className='Wrapper'>
                <Settings 
                breakLength={this.state.breakLength} 
                sessionLength={this.state.sessionLength}
                handleBreakChange = {this.handleBreakChange}
                handleSessionChange = {this.handleSessionChange}
                />
                <Timer timer={this.state.timer} timerType={this.state.timerType}/>
                <Controls resetTimer={this.resetTimer} startStopTimer={this.startStopTimer}/>
                <audio
          id="beep"
          preload="auto"
          ref={this.audioRef}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
            </div>
        )
    }
}
export default Wrapper