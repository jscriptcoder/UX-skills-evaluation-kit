import { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  useFirestoreDocData,
  useFirestore
} from 'reactfire'

import { AppContext } from './Store'

export default function GetUser(props) {
  const { render } = props
  const { state } = useContext(AppContext)

  const userRef = useFirestore()
    .collection('users')
    .doc(state.user.id)
  const user = useFirestoreDocData(userRef)

  return render(user)
}

GetUser.propTypes = {
  render: PropTypes.func
}
