import {Button} from 'rsuite'

const PlayButton = ({play, handlePlay}) => {

    function playSymbol() {
        if (play){
            return "Stop"
        } else {
            return "Play"
        }
    }
    return ( 
        <>
            <Button onClick={handlePlay}>{playSymbol()}</Button>
        </>
     );
}
 
export default PlayButton;
