import React from 'react';

import {AuthConsumer} from 'react-check-auth';

import Error from './Error';

import TACTIC from './tactic/Tactic';

export default function Classroom() {
  return (
  	<AuthConsumer>
      {({userInfo}) => {
        if (!userInfo) return <Error />
        
        return (
	      	<h1>Hey, welcome to the classroom.</h1>
		);

	  }}
  	</AuthConsumer>

  );
}