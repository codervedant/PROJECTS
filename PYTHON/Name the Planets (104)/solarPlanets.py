import cv2

img = cv2.imread("solar-system.jpg")
s = "Sun"
m = "Mercury"
v = "Venus"
e = "Earth"
mr = "Mars"
j = "Jupiter"
st = "Saturn"
u = "Uranus"
n = "Neptune"
mo = "Moon"
cv2.putText(img, s, (20, 70),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 5,
            fontScale = 3,  
            color = (255, 255, 255)
           )
cv2.putText(img, m, (110, 250),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 0.6,  
            color = (255, 255, 255)
           )
cv2.putText(img, v, (185, 175),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 0.6,  
            color = (255, 255, 255)
           )
cv2.putText(img, e, (285, 270),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 0.6,  
            color = (255, 255, 255)
           )
cv2.putText(img, mo, (300, 150),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 0.6,  
            color = (255, 255, 255)
           )
cv2.putText(img, mr, (380, 255),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 0.6,  
            color = (255, 255, 255)
           )
cv2.putText(img, j, (550, 390),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 1,  
            color = (255, 255, 255)
           )
cv2.putText(img, st, (755, 320),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 1,  
            color = (255, 255, 255)
           )
cv2.putText(img, u, (945, 300),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 1,  
            color = (255, 255, 255)
           )
cv2.putText(img, n, (1085, 145),  
            fontFace = cv2.FONT_HERSHEY_DUPLEX,
            thickness = 1,
            fontScale = 1,  
            color = (255, 255, 255)
           )
cv2.imshow("Solar System", img)
cv2.waitKey(0)
cv2.imwrite("Solar System.jpg", img)