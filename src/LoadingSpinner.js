import React from 'react';
import "./css/loadingSpinner.css";

function LoadingSpinner() {
  return (
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}

export { LoadingSpinner };