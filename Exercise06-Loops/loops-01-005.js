let pointsReceived = 105;

if (pointsReceived < 20) {
    console.log(`F`);
} else if (pointsReceived >= 20 && pointsReceived < 40) {
    console.log(`FX`);
} else if (pointsReceived >= 40 && pointsReceived < 50) {
    console.log(`E`)
} else if (pointsReceived >= 50 && pointsReceived < 60) {
    console.log(`D`)
} else if (pointsReceived >= 60 && pointsReceived < 70) {
    console.log(`C`)
} else if (pointsReceived >= 70 && pointsReceived < 85) {
    console.log(`B`)
} else if (pointsReceived >= 85 && pointsReceived <= 100) {
    console.log(`A`)
} else {
    console.log(`Invalid points, no shano please!`)
}

