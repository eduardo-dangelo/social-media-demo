import React from 'react';
import Loader from './Loader'
import { StyleContext } from '../scenes'
import { CurrentUser } from '../scenes/App'

export class LoadUserTheme extends React.Component {
  render() {
    return (
      <StyleContext.Consumer>
        {({ onSelectTheme }) => (
          <CurrentUser.Consumer>
            {({ userTheme }) => (
              <Loader onLoad={onSelectTheme} item={userTheme}/>
            )}
          </CurrentUser.Consumer>
        )}
      </StyleContext.Consumer>
    )
  }
}

