import { createContext, useContext } from "react";


const moods = {
    happy: ':)',
    sad: ':('
}

const MoodContext = createContext(moods);

function HookUseContext() {

    return(
        <MoodContext.Provider value={moods}>
            <MoodEmoji></MoodEmoji>
        </MoodContext.Provider>
    )
}


function MoodEmoji(){
    const mood = useContext(MoodContext);

    return (
        <label>{mood.happy}</label>
    )
}

export default HookUseContext;