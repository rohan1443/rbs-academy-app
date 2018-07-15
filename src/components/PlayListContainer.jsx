import React, { Component } from 'react'
import _ from 'underscore'
import classnames from 'classnames'

class PlayListContainer extends Component {

  render() {
    const playListNames = _.keys(this.props.playListData)
        , { selectedPlayListItem } = this.props
    return (
      <div className="play-list-container">
        <header>
          My PlayList
        </header>
        {
          playListNames.map(name => {
            let active = selectedPlayListItem === name
              , classes = classnames('play-list-items', { active });
            return (<div className={classes} key={name} onClick={this.props.selectedPlayList.bind(this, name)} >{name}</div>)
          })
        }
      </div>
    )
  }
}

export default PlayListContainer