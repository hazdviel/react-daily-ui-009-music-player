import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import './App.css'

class PlaybackControl extends Component {
  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { media: { 
              isPlaying,
              currentTime,
              duration
            }, 
            className
          } = this.props

    const currentTimeFormatted = Math.floor(currentTime / 60) + ':' + Math.floor(currentTime % 60)
    const durationFormatted = Math.floor(duration / 60) + ':' + Math.floor(duration % 60)
    const progress = (currentTime / duration) * 100
    console.log(progress)

    return (
      <div className="playback-control">
        <div className="playback-control__timeline">
          <div className="playback-timeline">
            <div className="playback-timeline__time-passed">{currentTimeFormatted}</div>
            <div className="playback-timeline__progress-wrapper">
              <div className="playback-timeline__progress-bar"/>
              <div className="playback-timeline__progress-handle"
                   style={{ left: `calc(${progress}% - 8px)` }} />
            </div>
            <div className="playback-timeline__duration">{durationFormatted}</div>
          </div>
        </div>

        <div className="playback-control__controls">
          <div className="controls">
            <button className="controls__prev" />

            <button className={isPlaying ? "controls__pause" : "controls__play" } 
                  onClick={this._handlePlayPause} />

            <button className="controls__next" />
          </div>
        </div>
      </div>
    )
  }
}

export default withMediaProps(PlaybackControl)