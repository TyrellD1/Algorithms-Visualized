import { useState, useEffect } from "react";
import { useWatch } from "../../../hooks/lifecycle";
import AlgorithmContainer from "../../AlgorithmContainer";

export default function ValidateSubsequence({
    array,
    subsequence,
    off
}) {
    const [arrIndex, setArrIndex] = useState(0);
    const [sIndex, setSIndex] = useState(0);
    const [timesRan, setTimesRan] = useState(0);
    
    const [isValid, setIsValid] = useState(null);
    useWatch(()=> {
        if(off) return;
        let sArrPosition = 0;
        let loopCounter = 0;
        let allCounter = 0;
        function loopFunc() {
            setTimeout(()=>{
                setTimesRan(allCounter);
                if(array[loopCounter] === subsequence[sArrPosition]) {
                    sArrPosition+=1;
                    setSIndex(sArrPosition);
                }
                loopCounter += 1;
                setArrIndex(loopCounter);
                allCounter += 1;
                if(sArrPosition !== subsequence.length && loopCounter < array.length) loopFunc();
                else setIsValid(sArrPosition===subsequence.length?true:false);
            }, 500)
        }
        loopFunc(); 
    }, [array, subsequence])
    return (
        <>
            <AlgorithmContainer title={"Validate Subsequence"}>
                <div className="array-container">
                    {array.map((val, i)=> {
                        return <div style={{backgroundColor: arrIndex===i?"#000":"", color: arrIndex===i?"#fff":"",}}>{val}</div>
                    })}
                </div>
                <div className="sequence-container">
                    {subsequence.map((val, i)=> {
                        return <div style={{backgroundColor: sIndex===i?"#000":"", color: sIndex===i?"#fff":""}}>{val}</div>
                    })}
                </div>
            {isValid === true?
            <p>True</p>:
            isValid === false?
            <p>False</p>:null
            }
            {isValid}
            </AlgorithmContainer>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .array-container, .sequence-container {
                        display: flex;
                        flex-direction: row;
                        div {
                            &:not(:nth-of-type(1)) {
                                margin-left: 4px;
                            }
                        }
                    }
                    .sequence-container {
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