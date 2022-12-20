import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Count.css';
const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false)
    return (
        <>
            <section className='counter dark:bg-gray-500'>
                <div className='counter-row'>
                    <div className='counter-column'>
                        <strong data-number='305'>

                            <CountUp {...rest} start={viewPortEntered ? null : 0} end={305} >
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPortEntered}
                                            onChange={isVisible => {
                                                if(isVisible) {
                                                    setViewPortEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>
                        </strong>
                        <span className='dark:text-white'>on going <br /> Projects</span>
                    </div>
                    <div className='counter-column'>
                        <strong data-number='1050'>

                            <CountUp {...rest} start={viewPortEntered ? null : 0} end={1050} >
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPortEntered}
                                            onChange={isVisible => {
                                                if(isVisible) {
                                                    setViewPortEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>
                        </strong>
                        <span className='dark:text-white'>on going <br /> Total Projects</span>
                    </div>
                    <div className='counter-column'>
                        <strong data-number='500'>

                            <CountUp {...rest} start={viewPortEntered ? null : 0} end={500} >
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPortEntered}
                                            onChange={isVisible => {
                                                if(isVisible) {
                                                    setViewPortEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>
                        </strong>
                        <span className='dark:text-white'>Complete <br /> Projects</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;