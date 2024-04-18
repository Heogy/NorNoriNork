import {Text, TextInput, View} from "react-native";
import {useState} from "react";


function findResponse({nor, nori, nork, denbora}) {
    if(nor === 'Ni' && nori === '' && nork === 'Zuk'){
        return 'Nauzu';
    }
    if(nor === 'Ni' && nori === 'Haiei' && nork === 'Zuk'){
        return 'Dizute';
    }
    return 'Ezin da !';
}

export default function App() {
    const [state, setState] = useState({
        nor: '',
        nori: '',
        nork: '',
        denbora: 'Orainaldia',
        errantzuna: ''
    });

    const setNor = (text) => setState((prev) => {
        const errantzuna = findResponse({...prev, nor: text})
        console.log(errantzuna)
        return {...prev, nor: text, errantzuna: errantzuna}
    })
    const setNori = (text) => setState((prev) => {
        const errantzuna = findResponse({...prev, nori: text})
        console.log(errantzuna)
        return {...prev, nori: text, errantzuna: errantzuna}
    })
    const setNork = (text) => setState((prev) => {
        const errantzuna = findResponse({...prev, nork: text})
        console.log(errantzuna)
        return {...prev, nork: text, errantzuna: errantzuna}
    })
    return (
        <View style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput placeholder={"Nor"} editable value={state.nor} onChangeText={setNor}/>
            <TextInput placeholder={"Nori"} editable value={state.nori} onChangeText={setNori}/>
            <TextInput placeholder={"Nork"} editable value={state.nork} onChangeText={setNork}/>
            <TextInput placeholder={"Denbora"} editable value={state.denbora} onChangeText={text => setState((prev) => {
                return {...prev, denbora: text}
            })}/>
            <Text>{state.errantzuna}</Text>
        </View>
    )
}
