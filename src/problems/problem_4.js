import {useState} from 'react';
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem () {
    let [clicks, setClicks] = useState(0);
    let [plural, setPlural] = useState('s')
    
    let [clicks_string, SAVED_CLICKS_KEY] = useState('')

    function clickCounts(){
        clicks++;
        setClicks(clicks);
        if (clicks==1){
            plural=''
            setPlural(plural)
        }else{
            plural='s'
            setPlural(plural)
        }
        clicks_string=JSON.stringify(clicks);
        SAVED_CLICKS_KEY(clicks_string);
    }
    
    function reset(){
        clicks=0;
        setClicks(clicks);
        if (clicks==1){
            plural=''
            setPlural(plural)
        }else{
            plural='s'
            setPlural(plural)
        }
        clicks_string=JSON.stringify(clicks);
        SAVED_CLICKS_KEY(clicks_string);
    }

    localStorage.setItem(SAVED_CLICKS_KEY, clicks_string);
    console.log(localStorage.getItem(SAVED_CLICKS_KEY));

    return <div className="btn-group">
            <button className="btn btn-primary" onClick={clickCounts}>Clicked {clicks} time{plural}</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>;
    ;
}