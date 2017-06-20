import React, { Component } from 'react';

function Detail(props) {
  return (
    <div>
      Showing you the page for job id {props.match.params.id}
    </div>
  );
}

export default Detail;
