import React from 'react';
import "./FirstIntro.css";

function FirstIntro() {
  return (<>
    <div className="ride_booking">
                        <div className='ride_headPr'>
                            <div className="ride_heading">
                                <h2>Request a ride now</h2>
                            </div>
                        </div>
                        <div className='ride_inputPr'>
                            <div className='ride_input'>
                                <input type="text" placeholder='Just pickup location' aria-autocomplete='list' autoComplete='off' className='in' readOnly="readonly" />
                            </div>
                        </div>
                        <div className='ride_inputPr2'>
                            <div className='ride_input2'>
                                <input type="text" placeholder='Enter destination' aria-autocomplete='list' autoComplete='off' className='in2' readOnly="readonly" autoFocus/>
                                <i></i>
                            </div>
                        </div>
                        <div className='ride_buttonPr'>
                            <div className="ride_button">
                            <a href='#/' text="Request now" className='ride_a'>
                                Request now
                            </a>
                            </div>
                            <div className="ride_button">
                            <a href='#/' text="Back now" className='ride_b'>
                                Back now
                            </a>
                            </div>
                        </div>
  </div>
  </>);
}

export default FirstIntro;