import { connect } from 'react-redux';
import { AppComponent } from './AppComponent';
import {onClick} from './app.actions';

const mapStateToProps = state => ({
    showSmiley: state.app.greeting,
    yoBool: state.app.yoBool
});

const mapDispatchToProps = {onClick};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
