// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

// const PrivateRoutes = ({component: Component, ...rest}) => {
//     return (

//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /signin page
//         <Route {...rest} render={props => (
//             isLogin() ?
//                 <Component {...props} />
//             : <Redirect to="/signin" />
//         )} />
//     );
// };

// export default PrivateRoutes;
import React from 'react'

function Privaterotes() {
  return (
    <div>
      Private Routes
    </div>
  )
}

export default Privaterotes;
