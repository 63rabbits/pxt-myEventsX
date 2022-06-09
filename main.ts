myBlocks.onMyEvent(512, 0, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    myBlocks.fireMyEvent(512, 0)
})
