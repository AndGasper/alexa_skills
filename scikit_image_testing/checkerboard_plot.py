import numpy as np
import matplotlib.pyplot as plt

checkerBoard = np.zeros((9,9)) # Generate a 2 dimensional array of 0's 
checkerBoard[::2, 1::2] = 1
checkerBoard[1::2, ::2] = 1
plt.matshow(checkerBoard, cmap='gray')
plt.show()