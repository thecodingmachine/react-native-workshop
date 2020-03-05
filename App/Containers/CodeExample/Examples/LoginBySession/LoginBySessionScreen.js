import React from 'react'
import { TextInput, Button, View, Text } from 'react-native'
import Brand from 'App/Components/CodeExample/Examples/LoginBySession/Brand'
import { Helpers, Metrics } from 'App/Theme'
import LoginBySessionActions from 'App/Stores/CodeExample/Examples/LoginBySession/Actions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

class LoginBySessionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
  }

  handleChange(name, text) {
    return this.setState({
      [name]: text,
    })
  }

  render() {
    return (
      <View
        style={[Helpers.fill, Helpers.column, Metrics.verticalPadding, Metrics.horizontalPadding]}
      >
        <View style={Helpers.fill}>
          <Brand height={200} image={'App/Assets/Images/TOM.png'} />
        </View>
        <View style={[Helpers.fill, Helpers.mainSpaceBetween]}>
          {this.props.loginError && <Text>{this.props.loginError}</Text>}
          {this.props.token && <Text>{this.props.token}</Text>}
          <View>
            <TextInput
              textContentType={'emailAddress'}
              value={this.state.email}
              onChangeText={(text) => this.handleChange('email', text)}
              style={[Metrics.verticalPadding, Metrics.verticalMargin, { borderWidth: 1 }]}
            />
            <TextInput
              secureTextEntry
              style={{ borderWidth: 1 }}
              value={this.state.password}
              onChangeText={(text) => this.handleChange('password', text)}
              style={[Metrics.verticalPadding, Metrics.verticalMargin, { borderWidth: 1 }]}
            />
          </View>
          <Button
            title={'Sign In'}
            onPress={() => this.props.login(this.state.email, this.state.password)}
          />
        </View>
      </View>
    )
  }
}

LoginBySessionScreen.propTypes = {
  token: PropTypes.string,
  loginLoading: PropTypes.bool,
  loginError: PropTypes.string,
  login: PropTypes.func,
}

const mapStateToProps = (state) => ({
  token: state.loginBySession.token,
  loginLoading: state.loginBySession.loginLoading,
  loginError: state.loginBySession.loginError,
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(LoginBySessionActions.login(email, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBySessionScreen)
