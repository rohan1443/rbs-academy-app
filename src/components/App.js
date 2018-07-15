import React, { Component } from 'react'
import PlayListJson from '../assets/json/play-list-json.json'
import _ from 'underscore'

import PlayListContainer from './PlayListContainer'
import PlayListDetailsContainer from './PlayListDetailsContainer'

let playListJSONData = PlayListJson

class MusicApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playListData: playListJSONData,
      selectedPlayListItem: null
    }

    this.selectedPlayList = this.selectedPlayList.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.deletePlayList = this.deletePlayList.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  selectedPlayList(name) {
    this.setState({ selectedPlayListItem: name })
  }

  removeTrack(itemToRemove) {
    const updatedPlayListData = this.state.playListData[this.state.selectedPlayListItem].filter(list => list.name !== itemToRemove.name)
    playListJSONData[this.state.selectedPlayListItem] = updatedPlayListData

    this.setState({ playListData: playListJSONData })
  }

  deletePlayList(selectedPlayListItem) {
    delete playListJSONData[selectedPlayListItem]
    this.setState({ playListData: playListJSONData })

    const nextItemInPlayList = _.keys(this.state.playListData)

    this.setState({ selectedPlayListItem: nextItemInPlayList[0] })
  }

  onInputChange(value) {
    console.log(value)
  }

  render() {
    const { selectedPlayListItem, playListData } = this.state
    console.log(playListData)
    return (
      <div className="app-container">
        <PlayListContainer
          playListData={playListData}
          selectedPlayList={this.selectedPlayList}
          selectedPlayListItem={selectedPlayListItem} 
        />
        <PlayListDetailsContainer
          selectedPlayListItem={selectedPlayListItem}
          playListData={playListData}
          removeTrack={this.removeTrack}
          deletePlayList={this.deletePlayList}
          onInputChange={this.onInputChange} 
        />
      </div>
    )
  }
}

export default MusicApp;