import React, { Component } from 'react'

class PlayListDetailsContainer extends Component {

  renderPlayListDetails() {
    const { playListData, selectedPlayListItem } = this.props
      , itemData = playListData[selectedPlayListItem]

    return (
      itemData.length ?
      (
        <div>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Length</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData.map(item => {
                return (
                  <tr key={item.name}>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.artistName}
                    </td>
                    <td>
                      {item.length}
                    </td>
                    <td onClick={this.props.removeTrack.bind(this, item)} className="track-remove-button">
                      Remove
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      )
      : <div className="track-add"> Please add new tracks</div>
    )
  }

  render() {
    const { playListData, selectedPlayListItem } = this.props

    if (!this.props.selectedPlayListItem) {
      return (<div className="play-list-details-text">Please Select a Play List</div>)
    }
    return (
      <div className="play-list-details-container">
        <div className="track-header">
          <div className="track-search">
            Search Track : <input type="text" onChange={(event) => this.props.onInputChange(event.target.value)}/>
          </div>
          <div className="track-count">
          Track Count : {playListData[selectedPlayListItem].length}
          </div>
        </div>
        {this.renderPlayListDetails()}
         <div className="delete-play-list">
              <button onClick={this.props.deletePlayList.bind(this, selectedPlayListItem)}>
                Delete PlayList
              </button>
            </div>
      </div>
    )
  }
}

export default PlayListDetailsContainer;