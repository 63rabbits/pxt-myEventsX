enum TempConvertType {
    //% block="°C → °F"
    CtoF,
    //% block="°F → °C"
    FtoC,
}

//% color=#2bd92e
//% weight=95
//% icon="\uf135"
namespace myEvents {
    //% blockId=myBlocks_convertTemperature
    //% block="convert|%value|%convertType"
    export function convertTemperature(value: number, convertType: TempConvertType): number {
        if (convertType === TempConvertType.CtoF) {
            return cToF(value);
        }
        if (convertType === TempConvertType.FtoC) {
            return fToC(value);
        }
        return value;
    }

    //% shim=myEvents::cToF
    function cToF(value: number) {
        return 32.0; // dummy for sim
    }

    //% shim=myEvents::fToC
    function fToC(value: number) {
        return -17.78; // dummy for sim
    }



    // // block="イベント・ハンドラー ソース=$id 値=$val"
    // export function onMyEvent(id: number, val: number, handler: () => void) {
    //     onEvent(id, val, handler)
    // }

    // // shim=myEvents::onEvnet
    // function onEvent(id: number, val: number, handler: () => void) {
    //     return 0    // dummy
    // }



    //% block="イベント発火 ソース=$id 値=$val"
    export function fireMyEvent(id: number, val: number) {
        fireEvent(id, val)
    }

    //% shim=myEvents::fireEvent
    function fireEvent(id: number, val: number) {
        return 0    // dummy
    }



}