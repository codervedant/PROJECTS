import os
import shutil

fd = "C:/Users/gicar/Downloads/New Folder (2)"
td = "C/Users/gicar/Desktop/Vedant/Whitehatjr/PROJECTS/PYTHON/Automate File Segregation (102)/Documents"
lof = os.listdir(fd)
print(lof)

for file_name in lof:
    
    name, extension = os.path.splitext(file_name)
    print(name)
    print(extension)

    if extension == '':
        continue
    if extension in ['.gif', '.png', '.jpg', '.jpeg','.jfif']:

        path1 = fd + '/' + file_name                        
        path2 = td + '/' + "Image_Files"                        
        path3 = td + '/' + "Image_Files" + '/' + file_name 
        print("path3 ", path3)

        if os.path.exists(path2):
          print("Moving " + file_name + ".....")
          shutil.move(path1, path3)
        else:
          os.makedirs(path2)
          print("Moving " + file_name + ".....")
          shutil.move(path1, path3)