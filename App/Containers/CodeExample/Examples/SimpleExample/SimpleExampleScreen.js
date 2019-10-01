import React from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/CodeExample/Examples/SimpleExample/Actions'
import { liveInEurope } from 'App/Stores/CodeExample/Examples/SimpleExample/Selectors'
import Style from './SimpleExampleScreenStyle'

/**
 * This is an example of a container component.
 * Here we illustrate how to use redux with sagas
 * This screen displays information about a fake user.
 */
class SimpleExampleScreen extends React.Component {
  /**
   * Before displaying the screen, we fetch a fake user
   */
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Text>
                <Text style={Style.result}>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Text>
              </View>
            )}
            <Button onPress={() => this._fetchUser()} title="Refresh" />
          </View>
        )}
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

SimpleExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleExampleScreen)
