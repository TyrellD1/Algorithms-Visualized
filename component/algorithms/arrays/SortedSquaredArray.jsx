import { useState, useEffect } from 'react';
import { useWatch } from '../../../hooks/lifecycle';
import AlgorithmContainer from "../../AlgorithmContainer";

export default function SortedSquaredArray({
    array,
    off,
}) {
    const [starterPointer, setStarterPointer] = useState(0);
    const [finalPointer, setFinalPointer] = useState(array.length - 1);
    const [finalArr, setFinalArr] = useState(new Array(array.length).fill(0));
    useWatch(()=> {
        if(off) return;
        const sortedSquares = new Array(array.length).fill(0);
        let startPointer = 0;
        let endPointer = array.length - 1;
        let loopCounter = 0;

        setStarterPointer(0);
        setFinalPointer(array.length - 1);
        setFinalArr(new Array(array.length).fill(0));

        function loopFunc() {
            setTimeout(()=> {
                function sortedSquaredArray(array) {
                    const startNum = array[startPointer];
                    const endNum = array[endPointer];
                    if(Math.abs(startNum) > Math.abs(endNum)) {
                        sortedSquares[array.length - 1 - loopCounter] = startNum * startNum;
                        setFinalArr([...sortedSquares]);
                        startPointer += 1;
                        if(loopCounter !== array.length - 2 && loopCounter !== array.length - 1) {
                            setStarterPointer(startPointer);
                        }
                    } else {
                        sortedSquares[array.length - 1 - loopCounter] = endNum * endNum;
                        setFinalArr([...sortedSquares]);
                        endPointer -= 1;
                        if(loopCounter !== array.length - 2 && loopCounter !== array.length - 1) {
                            setFinalPointer(endPointer);
                        }
                    }
                }
                // setFinalArr(sortedSquares);
                sortedSquaredArray(array);
                loopCounter += 1;
                if(loopCounter < array.length) loopFunc();
            }, 1500);
        };
        loopFunc() 
    },[array])
    return (
        <>
            <AlgorithmContainer title={"Sorted Squared Array"}>
                <div className='array-container'>
                    {array.map((val, i)=> {
                        return <div style={{
                            backgroundColor: i === starterPointer || i === finalPointer?"#000":"",
                            color: i === starterPointer || i === finalPointer?"#fff":""
                        }}>{val}</div>
                    })}
                </div>
                <div className='squared-array-container'>
                    {finalArr.map((val, i)=> {
                        return <div key={i}>{val}</div>
                    })}
                </div>
            </AlgorithmContainer>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .array-container, .squared-array-container {
                        display: flex;
                        flex-direction: row;
                        div {
                            &:not(:nth-of-type(1)) {
                                margin-left: 3px;
                            }
                        }
                    }
                    .squared-array-container {
                        margin-top: 3px;
                    }
                // All Devices Styles End
                @include media-query-phone {
                    
                }
                @include media-query-desktop {
                    
                }
            `}</style>
        </>
    )
}