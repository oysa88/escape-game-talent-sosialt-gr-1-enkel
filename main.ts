function nivåFullført () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.Yes,0)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.clear()
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
}
radio.onReceivedString(function (receivedString) {
    if (nivå == 1 && receivedString == "NEWTON") {
        nivåFullført()
        radio.setGroup(radioNivå2)
        nivå = 2
        basic.showNumber(nivå)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (nivå == 2 && receivedString == "FINLAND") {
        nivåFullført()
        radio.setGroup(radioNivå3)
        nivå = 3
        basic.showNumber(nivå)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (nivå == 3 && receivedString == "ELEMENTÆRPARTIKKEL") {
        nivåFullført()
        radio.setGroup(radioNivå4)
        nivå = 4
        basic.showNumber(nivå)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (nivå == 4 && receivedString == "VITENSENTER") {
        nivåFullført()
        radio.setGroup(radioNivå5)
        nivå = 5
        basic.showNumber(nivå)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (nivå == 5 && receivedString == "MASKINIST") {
        basic.showIcon(IconNames.Heart,0)
strip.showRainbow(1, 360)
        for (let index = 0; index < 240; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(20)
        }
        strip.clear()
        strip.show()
        basic.clearScreen()
    } else {
        for (let index = 0; index < 6; index++) {
            basic.showIcon(IconNames.No,0)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(200)
            strip.clear()
            strip.show()
            basic.pause(200)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        basic.showNumber(nivå)
    }
})
let radioNivå5 = 0
let radioNivå4 = 0
let radioNivå3 = 0
let radioNivå2 = 0
let nivå = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
nivå = 1
let radioNivå1 = 112
radioNivå2 = 125
radioNivå3 = 137
radioNivå4 = 142
radioNivå5 = 151
basic.showNumber(nivå)
radio.setGroup(radioNivå1)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
