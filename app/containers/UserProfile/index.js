/**
 *
 * UserProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>UserProfile</title>
          <meta name="description" content="Description of UserProfile" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userprofile: makeSelectUserProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userProfile', reducer });
const withSaga = injectSaga({ key: 'userProfile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserProfile);
