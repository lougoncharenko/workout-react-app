import React from 'react';

export default function Articles({data}) {
    return   <div>{data === null? null: data.message}</div>
  }