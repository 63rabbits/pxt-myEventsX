include "MicroBit.h"

MicroBit    uBit;

namespace myBlocks
{
    // //%
    // float cToF(float value)
    // {
    //     return value * 1.8 + 32.0;
    // }

    // //%
    // float fToC(float value)
    // {
    //     return (value - 32.0) / 1.8;
    // }

    //%
    float onEvent(float id, float val, Action body) {
        uBit.messageBus.listen((int)id, (int)val, body);
        return 0;
    }

    //%
    float fireEvent(float id, float val) {
        MicrobitEvent evt((int)id, (int)val); 
        return 0;
    }

} // namespace myBlocks