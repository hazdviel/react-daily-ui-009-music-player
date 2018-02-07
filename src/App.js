import React, { Component } from 'react'
import cn from 'classnames'
import { Media, Player } from 'react-media-player'
import PlaybackControl from './PlaybackControl'

import 'normalize.css'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    playing: false
  }

  // shouldComponentUpdate({ media }) {
  //   return this.props.media.isPlaying !== media.isPlaying
  // }

  handlePlay = () => {
    this.setState({ playing: true })
  }
  handlePause = () => {
    this.setState({ playing: false })
  }

  render() {
    const artwork = require('./assets/artwork5.jpg')
    const { playing } = this.state

    return (
      <div className="app">
        <div className="app__bg">
          <img src={artwork} alt="background" />
        </div>

        <div className="container">
          <img className="container__bg" src={artwork} alt="background" />

          <div className="header">
            <button className="header__button header__button--back" />
            <span className="header__title">Endless EP</span>
            <button className="header__button header__button--menu" />
          </div>


          <div className="now-playing">
            <div className="artwork">
              <div className={cn('artwork__image', [{'artwork__image--playing': playing}] )}
                   style={{ backgroundImage: `url(${artwork})` }} />
                   
              <div className="artwork__backdrop" 
                   style={{ backgroundImage: `url(${artwork})` }} />

              <div className="artwork__circle" />
            </div>

            <div className="song-info">
              <h1>REOL</h1>
              <h2>Endless Line</h2>
            </div>
          </div>


          <Media>
            <div style={{ width: '100%' }}>
              <Player src="https://dl.dropboxusercontent.com/s/b2lumc8ennaxrup/EndlessLine.ogg" vendor="audio"
                      onPlay={this.handlePlay}
                      onPause={this.handlePause} />
              <PlaybackControl />
            </div>
          </Media>
        </div> {/* container */}


        <div className="credits" style={{ textAlign: 'left' }}>
          <span>&copy; 2018, Hazmi Hafiz &nbsp;
            <a href="mailto:hazmihafiz@gmail.com" target="_top">&lt;hazmihafiz@gmail.com&gt;</a>
          </span> &nbsp;
          <span>MIT License.</span> &nbsp;
          <span>
            Design heavily insipired by &nbsp;
            <a href="https://dribbble.com/shots/3407213-Mix-Planet-sketch-freebie/" target="_blank">
              Michael Korwin: Mix Planet 🎧
            </a>
          </span>
        </div>


      </div>
    );
  }
}

export default App
