import os # seems a little risky importing all os methods
from skimage import io # For input/output processing
import matplotlib.pyplot as plt 

images = os.listdir("../training_images")
# os.fspath(images[0])

singleImageFilePath = "../training_images/"+images[0]


singleImageNumericDataArray = io.imread(singleImageFilePath, as_grey=True)

plt.figure(figsize=(4,4))
plt.imshow(singleImageNumericDataArray, cmap='gray', interpolation='nearest')
plt.tight_layout()
plt.show()