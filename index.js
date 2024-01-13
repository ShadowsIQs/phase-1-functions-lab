function distanceFromHqInBlocks(blocks){
    if ( blocks > 42){
        return (blocks - 42)
    }
    if(42 > blocks){
        return (42 - blocks)
    } 
}

function distanceFromHqInFeet(feet){
    if ( feet > 42){
        const kekw = (feet - 42)
        const kek = (kekw * 264)
        return (kek)
    }
    if(42 > feet){
        const hi = (42 - feet)
        const hey = (hi * 264)
        return (hey)
    } 
}

function distanceTravelledInFeet(address1, address2){
    if ( address1 > address2){
        const lip = (address1 - address2)
        const dip = (lip * 264)
        return (dip)
    }
    if(address2 > address1){
        const heck = (address2 - address1)
        const leck = (heck * 264)
        return (leck)
    } 
}

function calculatesFarePrice(start, destination){
    if ( start > destination){
        const sip = (start - destination)
        const rip = (sip * 264)
        if (rip > 400 && rip < 2000){
            const ray = (rip - 400)
            const yar = (ray * .02)
            return (yar)
        }
        if (rip > 2500){
            return ('cannot travel that far')

        }
    }
    if(destination > start){
        const lol = (destination - start)
        const lmao = (lol * 264)
        if (lmao < 400 ){
            return (0)
        }
        if (lmao > 2000){
            return (25)
        }
    }
}
console.log (calculatesFarePrice(43,45))