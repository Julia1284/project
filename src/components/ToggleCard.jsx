import { useState, useEffect, useCallback } from 'react';
import data from '../data/data.json';
import Card from './Card';
import right from '../assets/img/right.png';
import left from '../assets/img/left.png';
import styleToggle from './ToggleCard.module.css';

function ToggleCard({ choosenCard = -1 }) {


    const [cardArray, setCardArray] = useState(data);
    const [cardIndex, setCardIndex] = useState(0)

    console.log(cardIndex)

    const checkIndex = useCallback(
        (index) => {
            if (index < 0) {
                return cardArray.length - 1
            }
            else if (index >= cardArray.length) {
                return 0
            }
            return index
        }, [cardArray])
    useEffect(() => {
        const newIndex = checkIndex(choosenCard);
        setCardIndex(newIndex);
    }, [choosenCard, checkIndex]);



    const handleToggleCardLeft = () => {
        let newIndex = cardIndex;
        newIndex--;
        newIndex = checkIndex(newIndex)
        setCardIndex(newIndex)
    }
    const handleToggleCardRight = () => {
        let newIndex = cardIndex;
        newIndex++;
        newIndex = checkIndex(newIndex)
        setCardIndex(newIndex)
    }


    return (
        <div className={styleToggle.wrapper}>
            <button onClick={handleToggleCardLeft} className={styleToggle.toggle}>
                <img src={left} alt='left'></img>
            </button>
            <Card key={cardArray[cardIndex].id} english={cardArray[cardIndex].english} transcription={cardArray[cardIndex].transcription} translation={cardArray[cardIndex].russian} />
            <button onClick={handleToggleCardRight} className={styleToggle.toggle}>
                <img src={right} alt='right'></img>
            </button>
        </div>
    )
}

export default ToggleCard