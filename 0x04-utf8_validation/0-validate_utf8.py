#!/usr/bin/python3
""" UTTF-8 validation""" 
def validUTF8(data):
    """ function """
    bytes = 1

    for i in data:
        if bytes == 1:
            if i >> 5 == 0b110 or i >> 5 == 0b1110:
                bytes = 2
            elif i >> 4 == 0b1110:
                bytes= 3
            elif i >> 3 == 0b11110:
                bytes = 4
            elif i >> 7 == 0b1:
                return False
        else:
            if i >> 6 != 0b10:
                return False
            bytes -= 1
    return bytes == 1
