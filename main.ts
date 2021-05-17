let num = 0
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Hello!",
    1
    )
    OLED12864_I2C.rect(
    0,
    num,
    20,
    10,
    1
    )
    OLED12864_I2C.hline(
    0,
    0,
    5,
    1
    )
    OLED12864_I2C.showNumber(
    5,
    2,
    num,
    1
    )
    OLED12864_I2C.pixel(num, num, 1)
    num += 1
    basic.pause(500)
})
